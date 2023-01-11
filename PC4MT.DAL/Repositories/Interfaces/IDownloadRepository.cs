using PC4MT.DAL.Data.Models;

namespace PC4MT.DAL.Repositories.Interfaces
{
    public interface IDownloadRepository
    {
        ConfigDownload GetConfigDownload();

        ConfigDownload InsertConfigDownload(ConfigDownload download);

        ConfigDownload UpdateConfigDownload(ConfigDownload download);

        Download InsertDownload(Download download);

        Download UpdateDownload(Download download);
    }
}
