using PC4MT.DAL.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PC4MT.BLL.ViewModels
{
    public class UserViewModel
    {
        public int? Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public IEnumerable<UserRoleViewModel> UserRoles { get; set; }


        public static UserViewModel MapEntityToViewModel(User entity)
        {
            if (entity == null)
            {
                return null;
            }

            return new UserViewModel()
            {
                Id = entity.Id,
                Name = entity.Name,
                Email = entity.Email,
                UserRoles = entity.UserRoles != null && entity.UserRoles.Count() > 0 ?
                    entity.UserRoles.Select(x => UserRoleViewModel.MapEntityToViewModel(x)).ToList() : new List<UserRoleViewModel>(),

            };
        }

        public static User MapViewModelToEntity(UserViewModel viewModel)
        {
            if (viewModel == null)
            {
                return null;
            }

            var entity = new User()
            {
                Name = viewModel.Name,
                Email = viewModel.Email,
                UserRoles = viewModel.UserRoles != null && viewModel.UserRoles.Count() > 0 ?
                    viewModel.UserRoles.Select(x => UserRoleViewModel.MapViewModelToEntity(x)).ToList() : new List<ApplicationUserRole>(),
            };

            if (viewModel.Id.HasValue)
            {
                entity.Id = viewModel.Id.Value;
            }

            return entity;
        }
    }
}
