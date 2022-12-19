using Microsoft.Extensions.Configuration;
using PC4MT.BLL.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Net.Mail;

namespace PC4MT.BLL.Services
{
    public class MailService : IMailService
    {
        private IConfiguration _configuration;


        public MailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public bool SendEmail(string subject, string from, List<String> to, String message)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
                if (from == null)
                {
                    from = "glossloaderservice@gmail.com";
                }
                mail.From = new MailAddress(from);
                to.ForEach(x => mail.To.Add(x));
                mail.Subject = subject;
                mail.IsBodyHtml = true;
                mail.Body = message;

                SmtpServer.Port = 587;
                SmtpServer.UseDefaultCredentials = false;
                SmtpServer.Credentials = new System.Net.NetworkCredential("glossloaderservice@gmail.com", "l y e m z p c y a qd n k z v z");
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);
                return true;
            }
            catch (Exception) { throw; }
        }
    }
}
