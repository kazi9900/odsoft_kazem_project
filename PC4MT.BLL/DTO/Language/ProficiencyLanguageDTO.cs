using System;

namespace PC4MT.BLL.DTO.Language
{
    public class ProficiencyLanguageDTO
    {
        public int? UserId { get; set; }

        public int LanguageId { get; set; }

        public byte LevelProficiency { get; set; }
    }
}
