using Microsoft.AspNetCore.Identity;
using PC4MT.DAL.Data.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PC4MT.DAL.Repositories.Interfaces
{
    public interface IUserRepository
    {
        IEnumerable<User> GetUsers();

        IEnumerable<ApplicationUserRole> GetUserRolesByUserId(int userId);

        IEnumerable<ProjectUser> GetUserProjectsByUserId(int userId);

        ProjectUser GetUserProjectByUserIdAndProjectId(int userId, int projectId);

        User GetUserById(int id);

        public int GetIdOfUserLogged();

        User GetUserLogged();

        User GetUserByEmail(string email);

        Task<User> CreateUserAsync(User user, string password);

        bool ChangePassword(User user, string oldPassword, string newPassword);

        User InsertUser(User user);

        User UpdateUser(User user, IEnumerable<ApplicationUserRole> userRolesToRemove);

        ProjectUser InsertProjectUser(ProjectUser projectUser);
    }
}
