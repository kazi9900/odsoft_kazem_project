using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PC4MT.BLL.Services;
using PC4MT.BLL.Services.Interfaces;
using System.Collections.Generic;

namespace PC4MT.Tests
{
    [TestClass]
    public class MailServiceTests
    {
        private IConfiguration _configuration;
        private IMailService _mailService;

        [TestInitialize]
        public void TestInitialize()
        {
            // Arrange
            _configuration = GetConfiguration();
            _mailService = new MailService(_configuration);
        }

        [TestMethod]
        public void TestSendEmail()
        {
            // Arrange
            var subject = "Test Email";
            var from = "test@example.com";
            var to = new List<string> { "kazem.gelleck@gmail.com" };
            var message = "This is a test email.";

            // Act
            var result = _mailService.SendEmail(subject, from, to, message);

            // Assert
            Assert.IsTrue(result);
        }

        private IConfiguration GetConfiguration()
        {
            // You can use this method to set up any configuration settings that are required for the test.
            // For example, you might use this method to set the value of the "SMTP:From" setting, which is used
            // in the MailService class.
            return null;
        }
    }
}
