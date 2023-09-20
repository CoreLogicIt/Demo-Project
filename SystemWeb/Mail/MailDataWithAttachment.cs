namespace SystemWeb.Mail
{
    public class MailDataWithAttachment : MailData
    {
        public IFormFileCollection EmailAttachments { get; set; }
    }
}

