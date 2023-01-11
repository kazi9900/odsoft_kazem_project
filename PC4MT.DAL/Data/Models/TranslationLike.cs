using System;

namespace PC4MT.DAL.Data.Models
{
    public class TranslationLike
    {
        public int TranslationId { get; set; }

        public int UserId { get; set; }

        public bool? Like { get; set; }

        public virtual Translation Translation { get; set; }

        public virtual User User { get; set; }
    }
}
