namespace SystemWeb.Models
{
    public class MailDataWithAttachment : MailData
    {
        public IFormFileCollection EmailAttachments { get; set; }
    }
}

