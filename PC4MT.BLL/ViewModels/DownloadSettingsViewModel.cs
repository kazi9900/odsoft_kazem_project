using PC4MT.DAL.Data.Models;

namespace PC4MT.BLL.ViewModels
{
    public class DownloadSettingsViewModel
    {
        public int? MaxSentencesPerDownload { get; set; }

        public int? MaxSentencesPerUser { get; set; }

        public int? MaxSentencesL1L2 { get; set; }

        public int? MaxDownloadsPerUser { get; set; }

        public static DownloadSettingsViewModel MapEntityToViewModel(ConfigDownload entity)
        {
            if (entity == null)
            {
                return null;
            }

            return new DownloadSettingsViewModel()
            {
                MaxSentencesPerDownload = entity.MaxSentencesPerDownload,
                MaxSentencesPerUser = entity.MaxSentencesPerUser,
                MaxSentencesL1L2 = entity.MaxSentencesL1L2,
                MaxDownloadsPerUser = entity.MaxDownloadsPerUser
            };
        }

        public static ConfigDownload MapViewModelToEntity(DownloadSettingsViewModel viewModel)
        {
            if (viewModel == null)
            {
                return null;
            }

            return new ConfigDownload()
            {
                MaxSentencesPerDownload = viewModel.MaxSentencesPerDownload,
                MaxSentencesPerUser = viewModel.MaxSentencesPerUser,
                MaxSentencesL1L2 = viewModel.MaxSentencesL1L2,
                MaxDownloadsPerUser = viewModel.MaxDownloadsPerUser
            };
        }
    }
}
