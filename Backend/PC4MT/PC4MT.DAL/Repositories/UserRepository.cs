using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PC4MT.DAL.Context;
using PC4MT.DAL.Data.Models;
using PC4MT.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PC4MT.DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<User> _userManager;
        private readonly IHttpContextAccessor _accessor;
        private readonly PC4MTContext _pt4mtContext;

        public UserRepository(PC4MTContext pt4mtContext, UserManager<User> userManager, IHttpContextAccessor acessor)
        {
            _userManager = userManager;
            _accessor = acessor;
            _pt4mtContext = pt4mtContext;
        }

        IEnumerable<User> IUserRepository.GetUsers()
        {
            try
            {
                return _pt4mtContext.Users
                    .Include(x => x.UserRoles)
                    .ThenInclude(x => x.Role)
                    .Include(x => x.ProficiencyUsers)
                    .ThenInclude(x => x.Language)
                    .Include(x => x.UserProjects)
                    .ThenInclude(x => x.Project)
                    .ToList();
            }
            catch (Exception) { throw; }
        }

        IEnumerable<ApplicationUserRole> IUserRepository.GetUserRolesByUserId(int userId)
        {
            try
            {
                return _pt4mtContext.UserRoles
                    .Where(x => x.UserId == userId)
                    .ToList();
            }
            catch (Exception) { throw; }
        }

        IEnumerable<ProjectUser> IUserRepository.GetUserProjectsByUserId(int userId)
        {
            try
            {
                return _pt4mtContext.ProjectUsers
                    .Include(x => x.Project.Language1.Sentences)
                        .ThenInclude(x => x.TranslationsSentenceLanguage1)
                            .ThenInclude(x => x.SentenceLanguage2)
                    .Include(x => x.Project.Language1.Sentences)
                        .ThenInclude(x => x.TranslationsSentenceLanguage2)
                            .ThenInclude(x => x.SentenceLanguage1)
                    .Include(x => x.Project.Language2)
                    .Include(x => x.Project.ProjectUsers)
                    .ThenInclude(x => x.User)
                    .Include(x => x.Project.ProjectUsers)
                    .Where(x => x.UserId == userId)
                    .ToList();
            }
            catch (Exception) { throw; }
        }

        ProjectUser IUserRepository.GetUserProjectByUserIdAndProjectId(int userId, int projectId)
        {
            try
            {
                return _pt4mtContext.ProjectUsers
                    .Include(x => x.Project.Language1)
                    .Include(x => x.Project.Language2)
                    .Include(x => x.Project.ProjectUsers)
                    .ThenInclude(x => x.User)
                    .Include(x => x.Project.ProjectUsers)
                    .Where(x => x.UserId == userId && x.ProjectId == projectId)
                    .FirstOrDefault();
            }
            catch (Exception) { throw; }
        }

        User IUserRepository.GetUserById(int id)
        {
            try
            {
                return _pt4mtContext.Users
                    .Include(x => x.UserRoles)
                    .ThenInclude(x => x.Role)
                    .Include(x => x.ProficiencyUsers)
                    .ThenInclude(x => x.Language)
                    .Include(x => x.UserProjects)
                    .ThenInclude(x => x.Project)
                    .Where(x => x.Id == id)
                    .FirstOrDefault();
            }
            catch (Exception) { throw; }
        }

        public int GetIdOfUserLogged()
        {
            try
            {
                return _pt4mtContext.Users
                    .Where(x => x.Email == _accessor.HttpContext.User.Identity.Name)
                    .Select(x => x.Id)
                    .FirstOrDefault();
            }
            catch (Exception) { throw; }
        }

        public User GetUserLogged()
        {
            try
            {
                return _pt4mtContext.Users
                    .Where(x => x.Email == _accessor.HttpContext.User.Identity.Name)
                    .FirstOrDefault(); ;
            }
            catch (Exception) { throw; }
        }

        public User GetUserByEmail(string email)
        {
            try
            {
                return _pt4mtContext.Users
                    .Include(x => x.UserRoles)
                    .Include(x => x.ProficiencyUsers)
                    .Include(x => x.UserProjects)
                    .Where(x => x.Email == email)
                    //.Where(x => String.Equals(x.Email, email) == true)
                    .FirstOrDefault();
            }
            catch (Exception) { throw; }
        }

        public bool ChangePassword(User user, string oldPassword, string newPassword)
        {
            try
            {
                var x = _userManager.PasswordHasher.HashPassword(user, oldPassword);
                if (_userManager.PasswordHasher.HashPassword(user, oldPassword) == user.PasswordHash)
                {
                    user.PasswordHash = _userManager.PasswordHasher.HashPassword(user, newPassword);
                    _pt4mtContext.Users.Update(user);
                    _pt4mtContext.SaveChanges();
                    return true;
                }

                return false;
            }
            catch (Exception) { throw; }
        }

        public async Task<User> CreateUserAsync(User user, string password)
        {
            try
            {
                var result = _pt4mtContext.Users.Add(user);
                await _userManager.AddPasswordAsync(result.Entity, password);
                _pt4mtContext.SaveChanges();
                return result.Entity;
            }
            catch (Exception) { throw; }
        }

        User IUserRepository.InsertUser(User user)
        {
            try
            {
                _pt4mtContext.Users.Add(user);
                _pt4mtContext.SaveChanges();
                return user;
            }
            catch (Exception) { throw; }
        }

        User IUserRepository.UpdateUser(User user, IEnumerable<ApplicationUserRole> userRolesToRemove)
        {
            try
            {
                _pt4mtContext.UserRoles.RemoveRange(userRolesToRemove);
                _pt4mtContext.Users.Update(user);
                _pt4mtContext.SaveChanges();
                return user;
            }
            catch (Exception) { throw; }
        }

        ProjectUser IUserRepository.InsertProjectUser(ProjectUser projectUser)
        {
            try
            {
                _pt4mtContext.ProjectUsers.Add(projectUser);
                _pt4mtContext.SaveChanges();
                return projectUser;
            }
            catch (Exception) { throw; }
        }
    }
}
