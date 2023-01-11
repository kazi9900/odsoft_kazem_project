using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PC4MT.DAL.Data.Models;

namespace PC4MT.DAL.Mappings
{
    public class TranslationLikeMap : IEntityTypeConfiguration<TranslationLike>
    {
        public void Configure(EntityTypeBuilder<TranslationLike> builder)
        {
            builder.HasKey(ent => new { ent.TranslationId, ent.UserId });

            builder.HasOne(ent => ent.Translation)
                .WithMany(ent => ent.TranslationLikes)
                .HasForeignKey(ent => ent.TranslationId);
        }
    }
}
