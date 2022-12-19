using System;

namespace PC4MT.BLL.DTO.Project
{
    public class UserProjectDTO
    {
        public int? UserId { get; set; }

        public int? ProjectId { get; set; }

        public bool? IsProjectOwner { get; set; }

        public bool? IsAutorized { get; set; }

        public ProjectDTO Project { get; set; }
    }
}
