using System;

namespace PC4MT.DAL.Data.Models
{
    public class Download
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string Content { get; set; }

        public DateTime Date { get; set; }

        public virtual User User { get; set; }
    }
}
