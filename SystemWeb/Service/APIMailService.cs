
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Net;
using System.Net.Mail;
using SystemWeb.IAPIMailService;
using SystemWeb.Mail;
using SystemWeb.Models;

public class APIMailService : IAPIMail
{
    private readonly MailSettings _mailSettings;
    private readonly HttpClient _httpClient;
    private readonly SmtpSettings _smtpSettings;
    public APIMailService(IOptions<MailSettings> mailSettingsOptions, IHttpClientFactory httpClientFactory, IOptions<SmtpSettings> smtpSettings)
    {
        _mailSettings = mailSettingsOptions.Value;
        _httpClient = httpClientFactory.CreateClient("MailTrapApiClient");
        _smtpSettings = smtpSettings.Value;
    }

    public async Task<bool> SendHTMLMailAsync(HTMLMailData htmlMailData)
    {
        string filePath = Directory.GetCurrentDirectory() + "\\Templates\\Hello.html";
        string emailTemplateText = File.ReadAllText(filePath);

        var htmlBody = string.Format(emailTemplateText, htmlMailData.EmailToName, DateTime.Today.Date.ToShortDateString());

        var apiEmail = new
        {
            From = new { Email = _mailSettings.SenderEmail, Name = _mailSettings.SenderEmail },
            To = new[] { new { Email = htmlMailData.EmailToId, Name = htmlMailData.EmailToName } },
            Subject = "Hello",
            Html = htmlBody
        };

        var httpResponse = await _httpClient.PostAsJsonAsync("send", apiEmail);

        var responseJson = await httpResponse.Content.ReadAsStringAsync();
        var response = JsonConvert.DeserializeObject<Dictionary<string, object>>(responseJson);

        if (response != null && response.TryGetValue("success", out object? success) && success is bool boolSuccess && boolSuccess)
        {
            return true;
        }

        return false;
    }

    public async Task<bool> SendMailAsync(MailData mailData)
    {
        var apiEmail = new
        {
            From = new { Email = _mailSettings.SenderEmail, Name = _mailSettings.SenderEmail },
            To = new[] { new { Email = mailData.EmailToId, Name = mailData.EmailToName } },
            Subject = mailData.EmailSubject,
            Text = mailData.EmailBody
        };

        var httpResponse = await _httpClient.PostAsJsonAsync("send", apiEmail);

        var responseJson = await httpResponse.Content.ReadAsStringAsync();
        var response = JsonConvert.DeserializeObject<Dictionary<string, object>>(responseJson);

        if (response != null && response.TryGetValue("success", out object? success) && success is bool boolSuccess && boolSuccess)
        {
            return true;
        }

        return false;
    }

    public async Task<bool> SendMailWithAttachmentsAsync(MailDataWithAttachment mailDataWithAttachment)
    {
        var attachments = new List<object>();
        if (mailDataWithAttachment.EmailAttachments != null)
        {
            foreach (var attachmentFile in mailDataWithAttachment.EmailAttachments)
            {
                if (attachmentFile.Length == 0)
                {
                    continue;
                }

                using (MemoryStream memoryStream = new MemoryStream())
                {
                    await attachmentFile.CopyToAsync(memoryStream);
                    attachments.Add(new
                    {
                        FileName = attachmentFile.FileName,
                        Content = Convert.ToBase64String(memoryStream.ToArray()),
                        Type = attachmentFile.ContentType,
                        Disposition = "attachment" // or inline
                    });
                }
            }
        }

        var apiEmail = new
        {
            From = new { Email = _mailSettings.SenderEmail, Name = _mailSettings.SenderEmail },
            To = new[] { new { Email = mailDataWithAttachment.EmailToId, Name = mailDataWithAttachment.EmailToName } },
            Subject = mailDataWithAttachment.EmailSubject,
            Text = mailDataWithAttachment.EmailBody,
            Attachments = attachments.ToArray()
        };

        var httpResponse = await _httpClient.PostAsJsonAsync("send", apiEmail);

        var responseJson = await httpResponse.Content.ReadAsStringAsync();
        var response = JsonConvert.DeserializeObject<Dictionary<string, object>>(responseJson);

        if (response != null && response.TryGetValue("success", out object? success) && success is bool boolSuccess && boolSuccess)
        {
            return true;
        }

        return false;
    }

    public async Task SendWelcomeEmailAsync(string toEmail, string firstName, string package, PaymentStatus paymentStatus)
    {
        using (var smtpClient = new SmtpClient(_smtpSettings.SmtpServer)
        {
            Port = _smtpSettings.SmtpPort,
            Credentials = new NetworkCredential(_smtpSettings.SmtpUsername, _smtpSettings.SmtpPassword),
            EnableSsl = true,
        })
        {
            var message = new MailMessage
            {
                From = new MailAddress(_smtpSettings.SmtpUsername),
                Subject = "Welcome To our Family",
                Body = $"<html><body> Hello, {firstName}! Thank you for joining our website. You Have Selected {package} & Payment Details {paymentStatus}</body></html>",
                IsBodyHtml = true,
            };

            message.To.Add(new MailAddress(toEmail));
            await smtpClient.SendMailAsync(message);
        }
    }

    public async Task SendDashboardLoginEmailAsync(string toEmail, string firstName, string username, string password)
    {
        using (var smtpClient = new SmtpClient(_smtpSettings.SmtpServer)
        {
            Port = _smtpSettings.SmtpPort,
            Credentials = new NetworkCredential(_smtpSettings.SmtpUsername, _smtpSettings.SmtpPassword),
            EnableSsl = true,
        })
        {
            var message = new MailMessage
            {
                From = new MailAddress(_smtpSettings.SmtpUsername),
                Subject = "Your Dashboard Login Credentials",
                Body = $"Hello, {firstName}!\n\n" +
                        $"Here are your login credentials for our dashboard:\n" +
                        $"Username: {username}\n" +
                        $"Password: {password}\n\n" +
                        $"You can access the dashboard at http://127.0.0.1:3001",
            };

            message.To.Add(new MailAddress(toEmail));
            await smtpClient.SendMailAsync(message);
        }
    }

    public async Task SendPaymentDetails(string toEmail, string firstName, string package, string paymentLink) 
    {
        {
            using (var smtpClient = new SmtpClient(_smtpSettings.SmtpServer)
            {
                Port = _smtpSettings.SmtpPort,
                Credentials = new NetworkCredential(_smtpSettings.SmtpUsername, _smtpSettings.SmtpPassword),
                EnableSsl = true,
            })
            {
                var message = new MailMessage
                {
                    From = new MailAddress(_smtpSettings.SmtpUsername),
                    Subject = "Payment Notifcation ",
                    Body = $"Hello, {firstName}!\n\n" +
                            $"Here are our Payment  link for our dashboard:\n" +
                            $"{paymentLink}",
                };

                message.To.Add(new MailAddress(toEmail));
                await smtpClient.SendMailAsync(message);
            }
        }
    }
}
   
