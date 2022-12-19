namespace PC4MT.DAL.Data.Models
{
    public class ConfigDownload
    {
        public int Id { get; set; }

        public int? MaxSentencesPerDownload { get; set; }

        public int? MaxSentencesPerUser { get; set; }

        public int? MaxSentencesL1L2 { get; set; }

        public int? MaxDownloadsPerUser { get; set; }
    }
}
