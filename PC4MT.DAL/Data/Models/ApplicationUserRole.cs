using Microsoft.AspNetCore.Identity;
using System;

namespace PC4MT.DAL.Data.Models
{
    public class ApplicationUserRole : IdentityUserRole<int>
    {
        public virtual User User { get; set; }
        public virtual ApplicationRole Role { get; set; }
    }
}
