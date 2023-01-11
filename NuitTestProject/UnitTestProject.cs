using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PC4MT.BLL.DTO;
using PC4MT.BLL.Services;
using PC4MT.BLL.Services.Interfaces;
using PC4MT.DAL.Data.Models;
using PC4MT.DAL.Repositories.Interfaces;

namespace NuitTestProject
{
    [TestClass]
    public class UserServiceTests
    {
        [TestMethod]
        public void ChangePassword_WithValidOldPassword_ReturnsTrue()
        {
            // Create mock implementations of the required dependencies
            var languageRepositoryMock = new Mock<ILanguageRepository>();
            var projectRepositoryMock = new Mock<IProjectRepository>();
            var translationRepositoryMock = new Mock<ITranslationRepository>();
            var userRepositoryMock = new Mock<IUserRepository>();
            var passwordHasherMock = new Mock<IPasswordHasher<User>>();
            var userManagerMock = new Mock<UserManager<User>>();
            var configurationMock = new Mock<IConfiguration>();
            var mailServiceMock = new Mock<IMailService>();

            // Create an instance of the UserService class, passing in the mock dependencies
            var userService = new UserService(languageRepositoryMock.Object, projectRepositoryMock.Object, translationRepositoryMock.Object, userRepositoryMock.Object, passwordHasherMock.Object, userManagerMock.Object, configurationMock.Object, mailServiceMock.Object);

            // Cast the userService instance to the IUserService interface
            IUserService userServiceInterface = (IUserService)userService;

            // Create a PasswordDTO object to pass to the ChangePassword method
            var passwordDTO = new PasswordDTO
            {
                Email = "test@example.com",
                OldPassword = "oldpassword",
                NewPassword = "newpassword"
            };

            // Call the ChangePassword method through the interface
            bool result = userServiceInterface.ChangePassword(passwordDTO);

            // Assert that the result is true
            Assert.IsTrue(result);
        }
    }
}
