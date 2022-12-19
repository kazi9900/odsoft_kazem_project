using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PC4MT.DAL.Data.Models;

namespace PC4MT.DAL.Mappings
{
    public class DownloadMap : IEntityTypeConfiguration<Download>
    {
        public void Configure(EntityTypeBuilder<Download> builder)
        {
        }
    }
}
