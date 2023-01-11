<<<<<<< HEAD
﻿
using PC4MT.BLL.DTO;
=======
﻿using PC4MT.BLL.DTO;
>>>>>>> c73bda7d6bfcc629c075700fcec7fa98de9b2d37
using PC4MT.BLL.Services.Interfaces;
using PC4MT.BLL.ViewModels.Light;
using PC4MT.DAL.Data.Models;
using PC4MT.DAL.Repositories.Interfaces;
using System;
<<<<<<< HEAD

namespace PC4MT.BLL.Services
{
    /// <summary>
    /// The DownloadService class is responsible for providing methods to get configuration, Add and get download information
    /// </summary>
=======
using System.Collections.Generic;
using System.Text;

namespace PC4MT.BLL.Services
{
>>>>>>> c73bda7d6bfcc629c075700fcec7fa98de9b2d37
    public class DownloadService : IDownloadService
    {
        private readonly IDownloadRepository _downloadRepository;

<<<<<<< HEAD
        /// <summary>
        /// Initializes a new instance of the <see cref="DownloadService"/> class
        /// </summary>
        /// <param name="downloadRepository">an object that implement IDownloadRepository </param>
=======
>>>>>>> c73bda7d6bfcc629c075700fcec7fa98de9b2d37
        public DownloadService(
            IDownloadRepository downloadRepository)
        {
            _downloadRepository = downloadRepository;
        }

<<<<<<< HEAD
        /// <summary>
        /// This method get the configuration for download
        /// </summary>
        /// <returns> the download configuration </returns>
=======
>>>>>>> c73bda7d6bfcc629c075700fcec7fa98de9b2d37
        ConfigDownloadLight IDownloadService.GetConfigDownload()
        {
            try
            {
                var configDownload = _downloadRepository.GetConfigDownload();

                return ConfigDownloadLight.MapEntityToInterface(configDownload);
            }
            catch (Exception) { throw; }
        }

<<<<<<< HEAD
        /// <summary>
        /// This method add a new download
        /// </summary>
        /// <param name="download"> The download DTO object </param>
        /// <returns> The added download DTO</returns>
=======
>>>>>>> c73bda7d6bfcc629c075700fcec7fa98de9b2d37
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
<<<<<<< HEAD

=======
>>>>>>> c73bda7d6bfcc629c075700fcec7fa98de9b2d37
