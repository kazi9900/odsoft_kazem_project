using PC4MT.BLL.DTO.Language;
using PC4MT.BLL.DTO.Project;
using System.Collections.Generic;

namespace PC4MT.BLL.DTO.User
{
    public class UserListsDTO
    {
        public IEnumerable<LanguageDTO> Languages { get; set; }

        public IEnumerable<ProjectDTO> Projects { get; set; }
    }
}
