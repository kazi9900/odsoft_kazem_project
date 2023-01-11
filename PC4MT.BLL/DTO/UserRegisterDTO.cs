using PC4MT.BLL.DTO.Language;
using PC4MT.BLL.DTO.Project;
using System.Collections.Generic;

namespace PC4MT.BLL.DTO
{
    public class UserRegisterDTO
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public IEnumerable<UserProjectDTO> UserProjects { get; set; }

        public IEnumerable<ProficiencyLanguageDTO> ProficiencyLanguages { get; set; }
    }
}
