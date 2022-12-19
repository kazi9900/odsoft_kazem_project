using System;

namespace PC4MT.BLL.DTO
{
    public class TranslationDTO
    {
        public int? Id { get; set; }

        public int? SentenceSpokenId { get; set; }

        public int? SentenceSignId { get; set; }

        public int? ProjectId { get; set; }

        public int? UserCreationId { get; set; }

        public DateTime? DateCreation { get; set; }

        public int? UserChangeId { get; set; }

        public DateTime? DateChange { get; set; }

        public SentenceDTO SentenceSpoken { get; set; }

        public SentenceDTO SentenceSign { get; set; }
    }
}
