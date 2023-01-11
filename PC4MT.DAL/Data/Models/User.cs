using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PC4MT.DAL.Data.Models
{
    public class User : IdentityUser<int>
    {
        [Required]
        public string Name { get; set; }

        public DateTime RegistrationDate { get; set; }

        public DateTime? LastLogin { get; set; }

        public bool IsToNotify { get; set; }

        public ICollection<Project> ProjectsUserCreation { get; set; }

        public ICollection<Project> ProjectsUserChange { get; set; }

        public ICollection<ProjectUser> UserProjects { get; set; }

        public ICollection<ProficiencyUser> ProficiencyUsers { get; set; }

        public virtual ICollection<ApplicationUserRole> UserRoles { get; set; }
    }
}
