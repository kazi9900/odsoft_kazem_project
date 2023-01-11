using PC4MT.DAL.Context;
using PC4MT.DAL.Data.Models;
using PC4MT.DAL.Repositories.Interfaces;
using System;
using System.Linq;

namespace PC4MT.DAL.Repositories
{
    public class DownloadRepository : IDownloadRepository
    {
        private PC4MTContext _pt4mtContext;

        public DownloadRepository(PC4MTContext pt4mtContext)
        {
            _pt4mtContext = pt4mtContext;
        }

        ConfigDownload IDownloadRepository.GetConfigDownload()
        {
            try
            {
                return _pt4mtContext.ConfigDownloads.FirstOrDefault();
            }
            catch (Exception) { throw; }
        }

        ConfigDownload IDownloadRepository.InsertConfigDownload(ConfigDownload configDownload)
        {
            try
            {
                _pt4mtContext.ConfigDownloads.Add(configDownload);
                _pt4mtContext.SaveChanges();

                return configDownload;
            }
            catch (Exception) { throw; }
        }

        ConfigDownload IDownloadRepository.UpdateConfigDownload(ConfigDownload configDownload)
        {
            try
            {
                _pt4mtContext.ConfigDownloads.Update(configDownload);
                _pt4mtContext.SaveChanges();

                return configDownload;
            }
            catch (Exception) { throw; }
        }

        Download IDownloadRepository.InsertDownload(Download download)
        {
            try
            {
                _pt4mtContext.Downloads.Add(download);
                _pt4mtContext.SaveChanges();

                return download;
            }
            catch (Exception) { throw; }
        }

        Download IDownloadRepository.UpdateDownload(Download download)
        {
            try
            {
                _pt4mtContext.Downloads.Update(download);
                _pt4mtContext.SaveChanges();

                return download;
            }
            catch (Exception) { throw; }
        }
    }
}
