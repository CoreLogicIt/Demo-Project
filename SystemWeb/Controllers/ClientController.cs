using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Stripe;
using System.Net;
using System.Net.Mail;
using SystemWeb.IAPIMailService;
using SystemWeb.Mail;
using SystemWeb.Models;


namespace SystemWeb.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [EnableCors]
    public class ClientController : Controller
    {

        private readonly SmtpSettings _smtpSettings;
        private readonly IAPIMail _apiMailService;
       

        //injecting the IMailService into the constructor
        public ClientController(IAPIMail apiMailService, IConfiguration configuration)
            {
                
                _apiMailService = apiMailService;
            _smtpSettings = configuration.GetSection("SmtpSettings").Get<SmtpSettings>();
        }

    

        [HttpPost]
        public async Task<IActionResult> CreateClient(Client client)
        {
            try
            {
                // Check if the payment is completed
                if (client.PaymentStatus == PaymentStatus.Paid)
                {
                    await _apiMailService.SendWelcomeEmailAsync(client.Email, client.FirstName, client.Package, client.PaymentStatus);
                    await _apiMailService.SendDashboardLoginEmailAsync(client.Email, client.FirstName, client.Email, client.Password);

                    if (ModelState.IsValid)
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
                else if (client.PaymentStatus == PaymentStatus.Unpaid)
                {
                    // Payment is unpaid, send an email with a payment link
                    string paymentLink = "https://your-stripe-payment-link.com";
                    await _apiMailService.SendPaymentDetails(client.Email, client.FirstName, client.Package, paymentLink);

                    if (ModelState.IsValid)
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
                else
                {
                    // Handle other PaymentStatus values if needed
                    return BadRequest("Invalid payment status.");
                } 
            }
            catch (Exception ex)
            {
                // Handle exceptions as needed
<<<<<<< HEAD
                return StatusCode(500, "An error occurred while processing the request today.");
=======
                return StatusCode(500, "An error occurred while processing the request .");
>>>>>>> f58335a656c839478fbc00437d525683804fbd01
            }
        }


        [HttpPost("paymentinstant")]
        public async Task<IActionResult> Payment([FromBody]Payment payment)
        {
                try
                {
                    

                    var options = new PaymentIntentCreateOptions
                    {
                        
                        Amount = payment.amount,
                        Currency = "EUR",
                       PaymentMethod = "pm_card_visa",

                        AutomaticPaymentMethods = new PaymentIntentAutomaticPaymentMethodsOptions
                        {
                            Enabled = true,


                        },

                    };
                    

                    var service = new PaymentIntentService();
                    var paymentIntent = await service.CreateAsync(options);
                      


                return Json(new { ClientSecret = paymentIntent.ClientSecret });
                }
                catch (StripeException e)
                {
                    return BadRequest(new { error = new { message = e.StripeError.Message } });
                }
                catch (Exception ex)
                {
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

            

        }
}

