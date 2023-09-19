using Microsoft.AspNetCore.Mvc;
using SystemWeb.IAPIMailService;
using SystemWeb.Models;
using SystemWeb.Resources;
using SystemWeb.Service;

namespace SystemWeb.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ClientController : Controller
    {
       
        
            private readonly IAPIMail _apiMailService;
            private readonly IStripeService _stripeService;

        //injecting the IMailService into the constructor
        public ClientController(IAPIMail apiMailService, IStripeService stripeService)
            {
                _stripeService = stripeService;
                _apiMailService = apiMailService;
            }


        [HttpPost]
        public async Task<IActionResult> CreateClient([FromBody] Client client)
        {
            try
            {
                // Check if the payment is completed
                if (client.PaymentStatus == PaymentStatus.Paid)
                {
                    // Payment is completed, send an email with an attachment
                    var mailData = new MailData
                    { 
                        EmailToId =  client.Email,
                        EmailSubject = "Welcome to Our Website",
                        EmailBody = $"Hello, {client.FirstName}! Thank you for joining our website. You Have Selected {client.Package} & Payment Details"


                    };
                    var dashboardMailData = new MailData
                    {
                        EmailToId = client.Email,
                        EmailSubject = "Your Dashboard Login Credentials",
                        EmailBody = $"Hello, {client.FirstName}!\n\n" +
                            $"Here are your login credentials for our dashboard:\n" +
                            $"Username: {client.Email}\n" +
                            $"Password: {client.Password}\n\n" +
                            $"You can access the dashboard at http://localhost/dashboard"
                    };

                    // Call your email service to send the email with attachment
                    var emailSent1 =  _apiMailService.SendMailAsync(mailData);
                    var emailSent2 =  _apiMailService.SendMailAsync(dashboardMailData);

                    await Task.WhenAll(emailSent1, emailSent2);

                    if (emailSent1.Result && emailSent2.Result)
                    {
                        // Email sent successfully
                        return Ok("Payment completed, and email sent with attachment.");
                    }
                    else
                    {
                        // Email sending failed
                        return BadRequest("Payment completed, but email sending failed.");
                    }
                }
                else
                {
                    // Payment is unpaid, send an email with a payment link
                    var htmlMailData = new HTMLMailData   
                    {
                        // Configure email data with a payment link
                        // You can use your email service here
                    };

                    // Call your email service to send the email with the payment link
                    bool emailSent = await _apiMailService.SendHTMLMailAsync(htmlMailData);

                    if (emailSent)
                    {
                        // Email sent successfully
                        return Ok("Payment not completed. Email sent with payment link.");
                    }
                    else
                    {
                        // Email sending failed
                        return BadRequest("Payment not completed, and email sending failed.");
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle exceptions as needed
                return StatusCode(500, "An error occurred while processing the request.");
            }

        }

            [HttpPost]
            [Route("SendMailAsync")]
            public async Task<bool> SendMailAsync(MailData mailData)
            {
                return await _apiMailService.SendMailAsync(mailData);
            }

            [HttpPost]
            [Route("SendHTMLMailAsync")]
            public async Task<bool> SendHTMLMailAsync(HTMLMailData htmlMailData)
            {
                return await _apiMailService.SendHTMLMailAsync(htmlMailData);
            }

            [HttpPost]
            [Route("SendMailWithAttachmentAsync")]
            public async Task<bool> SendMailWithAttachmentAsync([FromForm] MailDataWithAttachment mailDataWithAttachment)
            {
                return await _apiMailService.SendMailWithAttachmentsAsync(mailDataWithAttachment);
            }

            [HttpPost("customer")]
            public async Task<ActionResult<CustomerResource>> CreateCustomer([FromBody] CreateCustomerResource resource,
                CancellationToken cancellationToken)
            {
                var response = await _stripeService.CreateCustomer(resource, cancellationToken);
                return Ok(response);
            }

            [HttpPost("charge")]
            public async Task<ActionResult<ChargeResource>> CreateCharge([FromBody] CreateChargeResource resource, CancellationToken cancellationToken)
            {
                var response = await _stripeService.CreateCharge(resource, cancellationToken);
                return Ok(response);
            }

        }
}

