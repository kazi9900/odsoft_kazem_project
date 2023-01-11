using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PC4MT.DAL.Data.Models
{
    public class Sentence
    {
        public int Id { get; set; }

        public int LanguageId { get; set; }

        public string Text { get; set; }

        public bool? Canceled { get; set; }

        public int? ProjectId { get; set; }

        public int? UserCreationId { get; set; }

        public DateTime? DateCreation { get; set; }

        public int? UserChangeId { get; set; }

        public DateTime? DateChange { get; set; }

        // RELATIONS

        public virtual Language Language { get; set; }

        public virtual Project Project { get; set; }

        public virtual User UserCreation { get; set; }

        public virtual User UserChange { get; set; }

        [InverseProperty("SentenceLanguage1")]
        public ICollection<Translation> TranslationsSentenceLanguage1 { get; set; }

        [InverseProperty("SentenceLanguage2")]
        public ICollection<Translation> TranslationsSentenceLanguage2 { get; set; }
    }
}
