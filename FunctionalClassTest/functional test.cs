using Moq;
using NUnit.Framework;
using PC4MT.BLL.Services;
using PC4MT.DAL.Data.Models;
using PC4MT.DAL.Repositories.Interfaces;
using System;
namespace PC4MT.Tests
{
    [TestFixture]
    public class DownloadServiceTests
    {
        private DownloadService _downloadService;
        private Mock<IDownloadRepository> _downloadRepositoryMock;

        [SetUp]
        public void Setup()
        {
            _downloadRepositoryMock = new Mock<IDownloadRepository>();
            _downloadService = new DownloadService(_downloadRepositoryMock.Object);
        }
        [Test]
        public void GetConfigDownload_ShouldReturnConfigDownloadLight()
        {
            // Arrange
            var configDownload = new ConfigDownload()
            {
                MaxSentencesPerDownload = 3,
                MaxSentencesPerUser = 3,
                MaxSentencesL1L2 = 3,
                MaxDownloadsPerUser = 3,
                MaxDownloadSize = 1048576
            };
            _downloadRepositoryMock.Setup(x => x.GetConfigDownload()).Returns(configDownload);

            // Act
            var result = _downloadService.GetConfigDownload();

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.MaxSentencesPerDownload);
            Assert.AreEqual(3, result.MaxSentencesPerUser);
            Assert.AreEqual(3, result.MaxSentencesL1L2);
            Assert.AreEqual(3, result.MaxDownloadsPerUser);
            Assert.AreEqual(1048576, result.MaxDownloadSize);
        }


        [Test]
        public void AddDownload_ShouldReturnDownloadDTO()
        {
            // Arrange
            var download = new DownloadDTO()
            {
                UserId = 1,
                Content = "sample content"
            };
            var newDownload = new Download()
            {
                Id = 1,
                Date = DateTime.Now,
                UserId = download.UserId,
                Content = download.Content
            };
            _downloadRepositoryMock.Setup(x => x.InsertDownload(It.IsAny<Download>())).Returns(newDownload);

            // Act
            var result = _downloadService.AddDownload(download);

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(1, result.Id);
            Assert.AreEqual(download.UserId, result.UserId);
            Assert.AreEqual(download.Content, result.Content);
        }
    }
}