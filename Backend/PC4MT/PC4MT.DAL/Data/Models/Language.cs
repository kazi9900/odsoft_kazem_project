using System.Collections.Generic;

namespace PC4MT.DAL.Data.Models
{
    public class Language
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Abbreviation { get; set; }

        public byte Type { get; set; }

        // RELATIONS

        public ICollection<Sentence> Sentences { get; set; }

        public ICollection<ProficiencyUser> LanguageProficiencyUser { get; set; }

        public Language() { }

        public Language(int id, string name, string abbreviation, byte type)
        {
            Id = id;
            Name = name;
            Abbreviation = abbreviation;
            Type = type;
        }
    }
}
