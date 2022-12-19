using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace PC4MT.DAL.Data.Models
{
    public class ApplicationRole : IdentityRole<int>
    {
        public virtual ICollection<ApplicationUserRole> UserRoles { get; set; }

        protected ApplicationRole() { }

        public ApplicationRole(string role)
        {
            Name = role;
        }
    }
}
