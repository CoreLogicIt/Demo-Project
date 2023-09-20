﻿using Microsoft.AspNetCore.Mvc;

namespace SystemWeb.Mail
{
    public class MailSettings
    {
        public string ApiToken { get; set; }
        public string ApiBaseUrl { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }
        public string SenderName { get; set; }
        public string SenderEmail { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
