using PC4MT.BLL.DTO;
using PC4MT.BLL.Services.Interfaces;
using PC4MT.BLL.ViewModels.Light;
using PC4MT.DAL.Data.Models;
using PC4MT.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace PC4MT.BLL.Services
{
    public class DownloadService : IDownloadService
    {
        private readonly IDownloadRepository _downloadRepository;

        public DownloadService(
            IDownloadRepository downloadRepository)
        {
            _downloadRepository = downloadRepository;
        }

        ConfigDownloadLight IDownloadService.GetConfigDownload()
        {
            try
            {
                var configDownload = _downloadRepository.GetConfigDownload();

                return ConfigDownloadLight.MapEntityToInterface(configDownload);
            }
            catch (Exception) { throw; }
        }

        DownloadDTO IDownloadService.AddDownload(DownloadDTO download)
        {
            try
            {
                var newDownload = new Download()
                {
                    Date = DateTime.Now,
                    UserId = download.UserId,
                    Content = download.Content
                };

                var result = _downloadRepository.InsertDownload(newDownload);

                return new DownloadDTO()
                {
                    Id = result.Id,
                    Date = result.Date,
                    UserId = result.UserId,
                    Content = result.Content
                };
            }
            catch (Exception) { throw; }
        }
    }
}
