using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace PC4MT.DAL.Data.Models
{
    public class ProficiencyUser
    {
        [ForeignKey("User")]
        public int UserId { get; set; }

        [ForeignKey("Language")]
        public int LanguageId { get; set; }

        public byte LevelProficiency { get; set; }

        // RELATIONS

        public virtual User User { get; set; }

        public virtual Language Language { get; set; }
    }
}
