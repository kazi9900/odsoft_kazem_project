using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PC4MT.DAL.Data.Models;

namespace PC4MT.DAL.Mappings
{
    public class ProjectUserMap : IEntityTypeConfiguration<ProjectUser>
    {
        public void Configure(EntityTypeBuilder<ProjectUser> builder)
        {
            builder.HasKey(e => new { e.UserId, e.ProjectId });
            builder.HasOne(p => p.User).WithMany(b => b.UserProjects).HasForeignKey(p => p.UserId);
            builder.HasOne(p => p.Project).WithMany(b => b.ProjectUsers).HasForeignKey(p => p.ProjectId);
        }
    }
}
