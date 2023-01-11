using PC4MT.BLL.DTO;
using PC4MT.BLL.ViewModels.Light;

namespace PC4MT.BLL.Services.Interfaces
{
    public interface IDownloadService
    {
        ConfigDownloadLight GetConfigDownload();

        DownloadDTO AddDownload(DownloadDTO download);
    }
}
