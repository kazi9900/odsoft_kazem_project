using PC4MT.BLL.ViewModels;
using PC4MT.BLL.ViewModels.Light;
using System.Collections.Generic;

namespace PC4MT.BLL.Services.Interfaces
{
    public interface IMaintenanceService
    {
        DownloadSettingsViewModel GetDownloadSettigns();

        IEnumerable<LanguageViewModel> GetLanguages();

        IEnumerable<ProjectViewModel> GetProjects();

        IEnumerable<UserViewModel> GetUsers();

        IEnumerable<UserLight> GetUsersLight();

        DownloadSettingsViewModel AddDownloadSettings(DownloadSettingsViewModel registo);

        DownloadSettingsViewModel UpdateDownloadSettings(DownloadSettingsViewModel registo);

        LanguageViewModel AddLanguage(LanguageViewModel registo);

        LanguageViewModel UpdateLanguage(LanguageViewModel registo);

        ProjectViewModel AddProject(ProjectViewModel registo);

        ProjectViewModel UpdateProject(ProjectViewModel registo);

        UserViewModel AddUser(UserViewModel registo);

        UserViewModel UpdateUser(UserViewModel registo);
    }
}
