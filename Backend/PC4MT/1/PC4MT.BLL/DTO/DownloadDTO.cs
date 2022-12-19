using System;

namespace PC4MT.BLL.DTO
{
    public class DownloadDTO
    {
        public int? Id { get; set; }

        public int UserId { get; set; }

        public string Content { get; set; }

        public DateTime Date { get; set; }
    }
}
