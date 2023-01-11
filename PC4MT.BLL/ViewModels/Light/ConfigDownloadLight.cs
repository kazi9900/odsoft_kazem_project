using PC4MT.DAL.Data.Models;

namespace PC4MT.BLL.ViewModels.Light
{
    public class ConfigDownloadLight
    {
        public int? MaxSentencesPerDownload { get; set; }

        public int? MaxSentencesPerUser { get; set; }

        public int? MaxSentencesL1L2 { get; set; }

        public int? MaxDownloadsPerUser { get; set; }


        public static ConfigDownloadLight MapEntityToInterface(ConfigDownload entity)
        {
            if (entity == null)
            {
                return null;
            }

            return new ConfigDownloadLight()
            {
                MaxSentencesPerDownload = entity.MaxSentencesPerDownload,
                MaxSentencesPerUser = entity.MaxSentencesPerUser,
                MaxSentencesL1L2 = entity.MaxSentencesL1L2,
                MaxDownloadsPerUser = entity.MaxDownloadsPerUser
            };
        }
    }
}
