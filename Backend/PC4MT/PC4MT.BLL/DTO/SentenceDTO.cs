using System;

namespace PC4MT.BLL.DTO
{
    public class SentenceDTO
    {
        public int? Id { get; set; }

        public string Text { get; set; }

        public int LanguageId { get; set; }

        public int? ProjectId { get; set; }

        public bool? Canceled { get; set; }

        public int? UserCreationId { get; set; }

        public DateTime? DateCreation { get; set; }

        public int? UserChangeId { get; set; }

        public DateTime? DateChange { get; set; }

        public int? CountTranslations { get; set; }

        public int? LastSentenceTranslationId { get; set; }

        public SentenceDTO LastSentenceTranslation { get; set; }
    }
}
