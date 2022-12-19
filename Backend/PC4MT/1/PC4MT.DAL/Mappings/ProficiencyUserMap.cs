using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PC4MT.DAL.Data.Models;

namespace PC4MT.DAL.Mappings
{
    public class ProficiencyUserMap : IEntityTypeConfiguration<ProficiencyUser>
    {
        public void Configure(EntityTypeBuilder<ProficiencyUser> builder)
        {
            builder.HasKey(e => new { e.UserId, e.LanguageId});
            builder.HasOne(p => p.User).WithMany(b => b.ProficiencyUsers).HasForeignKey(p => p.UserId);
            builder.HasOne(p => p.Language).WithMany(b => b.LanguageProficiencyUser).HasForeignKey(p => p.LanguageId);
        }
    }
}
