using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using PC4MT.DAL.Data.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace PC4MT.DAL.Context.Seed
{
    public class SeedData
    {
        public static async Task InitializeAsync(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<PC4MTContext>();
            context.Database.EnsureCreated();

            await InitializeRolesAsync(serviceProvider);
            InitializeLanguages(serviceProvider);
        }

        private static async Task InitializeRolesAsync(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<PC4MTContext>();
            context.Database.EnsureCreated();

            var RoleManager = serviceProvider.GetRequiredService<RoleManager<ApplicationRole>>();
            var UserManager = serviceProvider.GetRequiredService<UserManager<User>>();

            var roleCheckRoot = await RoleManager.RoleExistsAsync("Root");
            if (!roleCheckRoot)
            {
                await RoleManager.CreateAsync(new ApplicationRole("Root"));
            }

            var roleCheckAdmin = await RoleManager.RoleExistsAsync("Admin");
            if (!roleCheckAdmin)
            {
                await RoleManager.CreateAsync(new ApplicationRole("Admin"));
            }

            var roleCheckEditor = await RoleManager.RoleExistsAsync("Editor");
            if (!roleCheckEditor)
            {
                await RoleManager.CreateAsync(new ApplicationRole("Editor"));
            }

            var roleCheckRegular = await RoleManager.RoleExistsAsync("Regular");
            if (!roleCheckRegular)
            {
                await RoleManager.CreateAsync(new ApplicationRole("Regular"));
            }
        }

        private static void InitializeLanguages(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<PC4MTContext>();
            context.Database.EnsureCreated();

            var hasValues = context.Languages.Count() != 0;

            if (!hasValues)
            {
                context.Languages.AddRange(
                     new Language(1, "Português", "LP", 1),
                     new Language(2, "Língua gestual portuguesa", "LGP", 2));

                context.SaveChanges();
            }
        }
    }
}
