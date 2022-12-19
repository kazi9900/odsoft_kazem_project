using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PC4MT.DAL.Data.Models;

namespace PC4MT.DAL.Mappings
{
    public class SentenceMap : IEntityTypeConfiguration<Sentence>
    {
        public void Configure(EntityTypeBuilder<Sentence> builder)
        {
            builder.HasOne(ent => ent.Language)
                .WithMany(ent => ent.Sentences)
                .HasForeignKey(ent => ent.LanguageId);

            builder.HasMany(ent => ent.TranslationsSentenceLanguage2)
                .WithOne(ent => ent.SentenceLanguage2)
                .HasForeignKey(ent => ent.SentenceLanguage2Id);

            builder.HasMany(ent => ent.TranslationsSentenceLanguage1)
                .WithOne(ent => ent.SentenceLanguage1)
                .HasForeignKey(ent => ent.SentenceLanguage1Id);
        }
    }
}
