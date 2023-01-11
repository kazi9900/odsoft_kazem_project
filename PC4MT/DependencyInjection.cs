using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using PC4MT.BLL.Services;
using PC4MT.BLL.Services.Interfaces;
using PC4MT.DAL.Repositories;
using PC4MT.DAL.Repositories.Interfaces;

namespace PC4MT
{
    public class DependencyInjection
    {
        public static void RegisterServices(IServiceCollection services)
        {
            // ASP.NET HttpContext dependency
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            #region SERVICES
            services.AddScoped<IContributeService, ContributeService>();
            services.AddScoped<IDownloadService, DownloadService>();
            services.AddScoped<IMailService, MailService>();
            services.AddScoped<IMaintenanceService, MaintenanceService>();
            services.AddScoped<IUserService, UserService>();
            #endregion

            #region REPOSITORIES
            services.AddScoped<IDownloadRepository, DownloadRepository>();
            services.AddScoped<ILanguageRepository, LanguageRepository>();
            services.AddScoped<IProjectRepository, ProjectRepository>();
            services.AddScoped<ITranslationRepository, TranslationRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            #endregion
        }
    }
}
