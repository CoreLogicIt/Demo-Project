using SystemWeb.Models;

namespace SystemWeb.IAPIMailService
{
    public interface IAPIMail
    {
        
            Task<bool> SendMailAsync(MailData mailData);
            Task<bool> SendHTMLMailAsync(HTMLMailData htmlMailData);
            Task<bool> SendMailWithAttachmentsAsync(MailDataWithAttachment mailDataWithAttachment);
        
           
        

    }
}
