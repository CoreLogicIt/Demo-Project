using SystemWeb.Mail;
using SystemWeb.Models;

namespace SystemWeb.IAPIMailService
{
    public interface IAPIMail
    {
        
            Task<bool> SendMailAsync(MailData mailData);
            Task<bool> SendHTMLMailAsync(HTMLMailData htmlMailData);
            Task<bool> SendMailWithAttachmentsAsync(MailDataWithAttachment mailDataWithAttachment);

            Task SendWelcomeEmailAsync(string toEmail, string firstName, string package, PaymentStatus paymentStatus);
            Task SendDashboardLoginEmailAsync(string toEmail, string firstName, string username, string password);

             Task SendPaymentDetails(string toEmail, string firstName, string package);

           

    }
}
