using PC4MT.BLL.Services.Interfaces;
using PC4MT.BLL.ViewModels;
using PC4MT.BLL.ViewModels.Light;
using PC4MT.DAL.Data.Models;
using PC4MT.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PC4MT.BLL.Services
{
    public class MaintenanceService : IMaintenanceService
    {
        private readonly IDownloadRepository _downloadRepository;
        private readonly ILanguageRepository _languageRepository;
        private readonly IProjectRepository _projectRepository;
        private readonly IUserRepository _userRepository;

        public MaintenanceService(
            ILanguageRepository languageRepository,
            IProjectRepository projectRepository,
            IDownloadRepository downloadRepository,
            IUserRepository userRepository)
        {
            _downloadRepository = downloadRepository;
            _languageRepository = languageRepository;
            _projectRepository = projectRepository;
            _userRepository = userRepository;
        }

        DownloadSettingsViewModel IMaintenanceService.GetDownloadSettigns()
        {
            try
            {
                var downloadSettings = _downloadRepository.GetConfigDownload();
                return DownloadSettingsViewModel.MapEntityToViewModel(downloadSettings);
            }
            catch (Exception) { throw; }
        }

        IEnumerable<LanguageViewModel> IMaintenanceService.GetLanguages()
        {
            try
            {
                var languages = _languageRepository.GetLanguages();
                return languages != null ? languages.Select(x => LanguageViewModel.MapEntityToViewModel(x)).ToList() : new List<LanguageViewModel>();
            }
            catch (Exception) { throw; }
        }

        IEnumerable<ProjectViewModel> IMaintenanceService.GetProjects()
        {
            try
            {
                var projects = _projectRepository.GetProjects();
                return projects != null ? projects.Select(x => ProjectViewModel.MapEntityToViewModel(x)).ToList() : new List<ProjectViewModel>();
            }
            catch (Exception) { throw; }
        }

        IEnumerable<UserViewModel> IMaintenanceService.GetUsers()
        {
            try
            {
                var users = _userRepository.GetUsers();
                return users != null ? users.Select(x => UserViewModel.MapEntityToViewModel(x)).ToList() : new List<UserViewModel>();
            }
            catch (Exception) { throw; }
        }

        IEnumerable<UserLight> IMaintenanceService.GetUsersLight()
        {
            try
            {
                var users = _userRepository.GetUsers();
                return users != null ? users.Select(x => UserLight.MapEntityToInterface(x)).ToList() : new List<UserLight>();
            }
            catch (Exception) { throw; }
        }

        DownloadSettingsViewModel IMaintenanceService.AddDownloadSettings(DownloadSettingsViewModel registo)
        {
            try
            {
                var downloadSettings = _downloadRepository.InsertConfigDownload(DownloadSettingsViewModel.MapViewModelToEntity(registo));
                return downloadSettings != null ? DownloadSettingsViewModel.MapEntityToViewModel(downloadSettings) : null;
            }
            catch (Exception) { throw; }
        }

        DownloadSettingsViewModel IMaintenanceService.UpdateDownloadSettings(DownloadSettingsViewModel registo)
        {
            try
            {
                var downloadSettingsDB = _downloadRepository.GetConfigDownload();

                downloadSettingsDB.MaxSentencesPerDownload = registo.MaxSentencesPerDownload;
                downloadSettingsDB.MaxSentencesPerUser = registo.MaxSentencesPerUser;
                downloadSettingsDB.MaxSentencesL1L2 = registo.MaxSentencesL1L2;
                downloadSettingsDB.MaxDownloadsPerUser = registo.MaxDownloadsPerUser;

                var downloadSettings = _downloadRepository.UpdateConfigDownload(downloadSettingsDB);
                return DownloadSettingsViewModel.MapEntityToViewModel(downloadSettings);
            }
            catch (Exception) { throw; }
        }

        LanguageViewModel IMaintenanceService.AddLanguage(LanguageViewModel registo)
        {
            try
            {
                var language = _languageRepository.InsertLanguage(LanguageViewModel.MapViewModelToEntity(registo));
                if (language != null)
                {
                    return LanguageViewModel.MapEntityToViewModel(_languageRepository.GetLanguageById(language.Id));
                }

                return null;
            }
            catch (Exception) { throw; }
        }

        LanguageViewModel IMaintenanceService.UpdateLanguage(LanguageViewModel registo)
        {
            try
            {
                var language = _languageRepository.UpdateLanguage(LanguageViewModel.MapViewModelToEntity(registo));
                if (language != null)
                {
                    return LanguageViewModel.MapEntityToViewModel(_languageRepository.GetLanguageById(language.Id));
                }

                return null;
            }
            catch (Exception) { throw; }
        }

        ProjectViewModel IMaintenanceService.AddProject(ProjectViewModel registo)
        {
            try
            {
                var project = _projectRepository.InsertProject(ProjectViewModel.MapViewModelToEntity(registo));
                if (project != null)
                {
                    return ProjectViewModel.MapEntityToViewModel(_projectRepository.GetProjectById(project.Id));
                }

                return null;
            }
            catch (Exception) { throw; }
        }

        ProjectViewModel IMaintenanceService.UpdateProject(ProjectViewModel registo)
        {
            try
            {
                var project = _projectRepository.UpdateProject(ProjectViewModel.MapViewModelToEntity(registo));
                if (project != null)
                {
                    return ProjectViewModel.MapEntityToViewModel(_projectRepository.GetProjectById(project.Id));
                }

                return null;
            }
            catch (Exception) { throw; }
        }

        UserViewModel IMaintenanceService.AddUser(UserViewModel registo)
        {
            try
            {
                var user = _userRepository.InsertUser(UserViewModel.MapViewModelToEntity(registo));
                if (user != null)
                {
                    return UserViewModel.MapEntityToViewModel(_userRepository.GetUserById(user.Id));
                }

                return null;
            }
            catch (Exception) { throw; }
        }

        UserViewModel IMaintenanceService.UpdateUser(UserViewModel registo)
        {
            try
            {
                var userDB = _userRepository.GetUserById(registo.Id.Value);
                if (userDB != null)
                {
                    userDB.Name = registo.Name;
                    userDB.Email = registo.Email;

                    var userRolesToRemove = new List<ApplicationUserRole>();

                    var userRolesDB = _userRepository.GetUserRolesByUserId(registo.Id.Value);


                    if (userRolesDB != null && userRolesDB.Count() > 0)
                    {
                        userRolesToRemove = userRolesDB.Where(x => registo.UserRoles.Any(z => z.RoleId == x.RoleId) == false).ToList();
                    }

                    userDB.UserRoles = registo.UserRoles
                        .Select(x => new ApplicationUserRole() { UserId = x.UserId.Value, RoleId = x.RoleId })
                        .ToList();

                    var user = _userRepository.UpdateUser(userDB, userRolesToRemove);
                    if (user != null)
                    {
                        return UserViewModel.MapEntityToViewModel(_userRepository.GetUserById(user.Id));
                    }
                }
                return null;
            }
            catch (Exception) { throw; }
        }
    }
}
