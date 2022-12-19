using System;
using System.Collections.Generic;

namespace PC4MT.DAL.Data.Models
{
    public class Translation
    {
        public int Id { get; set; }

        public int SentenceLanguage1Id { get; set; }

        public int SentenceLanguage2Id { get; set; }

        public int? UserCreationId { get; set; }

        public DateTime? DateCreation { get; set; }

        public int? UserChangeId { get; set; }

        public DateTime? DateChange { get; set; }

        // RELATIONS

        public virtual Sentence SentenceLanguage1 { get; set; }

        public virtual Sentence SentenceLanguage2 { get; set; }

        public virtual User UserCreation { get; set; }

        public virtual User UserChange { get; set; }

        public IEnumerable<TranslationLike> TranslationLikes { get; set; }

    }
}
