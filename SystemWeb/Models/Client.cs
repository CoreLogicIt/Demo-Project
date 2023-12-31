﻿namespace SystemWeb.Models
{
    public class Client
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string PhoneNum {  get; set; }

        public string Package { get; set; }

        public PaymentStatus PaymentStatus { get; set; }

        public DateTime CreatedDate { get; set; }

    }
}
