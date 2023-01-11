using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PC4MT.DAL.Data.Models;

namespace PC4MT.DAL.Mappings
{
    public class TranslationMap : IEntityTypeConfiguration<Translation>
    {
        public void Configure(EntityTypeBuilder<Translation> builder)
        {
            builder.HasOne(ent => ent.SentenceLanguage2)
                .WithMany(ent => ent.TranslationsSentenceLanguage2)
                .HasForeignKey(ent => ent.SentenceLanguage2Id);

            builder.HasOne(ent => ent.SentenceLanguage1)
                .WithMany(ent => ent.TranslationsSentenceLanguage1)
                .HasForeignKey(ent => ent.SentenceLanguage1Id);
        }
    }
}
