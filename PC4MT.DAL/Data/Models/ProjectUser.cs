using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace PC4MT.DAL.Data.Models
{
    public class ProjectUser
    {
        [ForeignKey("User")]
        public int UserId { get; set; }

        [ForeignKey("Project")]
        public int ProjectId { get; set; }
        
        public bool? IsprojectOwner { get; set; }

        public bool? IsAutorized { get; set; }

        // RELATIONS

        public virtual User User { get; set; }

        public virtual Project Project { get; set; }
    }
}
