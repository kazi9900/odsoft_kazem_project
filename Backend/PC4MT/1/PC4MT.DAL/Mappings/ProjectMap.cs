using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PC4MT.DAL.Data.Models;

namespace PC4MT.DAL.Mappings
{
    public class ProjectMap : IEntityTypeConfiguration<Project>
    {
        public void Configure(EntityTypeBuilder<Project> builder)
        {
            builder.HasOne(ent => ent.UserChange)
                   .WithMany(ent => ent.ProjectsUserChange)
                   .HasForeignKey(ent => ent.UserChangeId);

            builder.HasOne(ent => ent.UserCreation)
                   .WithMany(ent => ent.ProjectsUserCreation)
                   .HasForeignKey(ent => ent.UserCreationId);
        }
    }
}
