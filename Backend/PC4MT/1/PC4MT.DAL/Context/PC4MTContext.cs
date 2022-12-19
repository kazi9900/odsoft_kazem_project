using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PC4MT.DAL.Mappings;
using PC4MT.DAL.Data.Models;
using System;
using System.IO;
using Microsoft.AspNetCore.Identity;

namespace PC4MT.DAL.Context
{
    public class PC4MTContext : IdentityDbContext<User, ApplicationRole, int, 
        IdentityUserClaim<int>, ApplicationUserRole, IdentityUserLogin<int>,
        IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        // DbSets
        public DbSet<Project> Projects { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Sentence> Sentences { get; set; }
        public DbSet<Translation> Translations { get; set; }
        public DbSet<TranslationLike> TranslationLikes { get; set; }
        public DbSet<ProficiencyUser> ProficiencyUsers { get; set; }
        public DbSet<ProjectUser> ProjectUsers { get; set; }
        public DbSet<Download> Downloads { get; set; }
        public DbSet<ConfigDownload> ConfigDownloads { get; set; }

        public PC4MTContext(DbContextOptions<PC4MTContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProjectMap());
            modelBuilder.ApplyConfiguration(new LanguageMap());
            modelBuilder.ApplyConfiguration(new SentenceMap());
            modelBuilder.ApplyConfiguration(new TranslationMap());
            modelBuilder.ApplyConfiguration(new TranslationLikeMap());
            modelBuilder.ApplyConfiguration(new ProficiencyUserMap());
            modelBuilder.ApplyConfiguration(new ProjectUserMap());
            modelBuilder.ApplyConfiguration(new DownloadMap());
            modelBuilder.ApplyConfiguration(new ConfigDownloadMap());

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(b =>
            {
                // Each User can have many entries in the UserRole join table
                b.HasMany(e => e.UserRoles)
                    .WithOne(e => e.User)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });

            modelBuilder.Entity<ApplicationRole>(b =>
            {
                // Each Role can have many entries in the UserRole join table
                b.HasMany(e => e.UserRoles)
                    .WithOne(e => e.Role)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();
            });
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            IConfiguration Configuration = builder.Build();

            optionsBuilder.UseMySQL(Configuration.GetConnectionString("DefaultConnection"));
            base.OnConfiguring(optionsBuilder);
        }

    }
}
