using PC4MT.DAL.Data.Models;
using System;

namespace PC4MT.BLL.ViewModels
{
    public class UserRoleViewModel
    {
        public int? UserId { get; set; }

        public int RoleId { get; set; }

        public string RoleName { get; set; }

        public bool? Anulado { get; set; }

        public static UserRoleViewModel MapEntityToViewModel(ApplicationUserRole entity)
        {
            if (entity == null)
            {
                return null;
            }

            return new UserRoleViewModel()
            {
                UserId = entity.UserId,
                RoleId = entity.RoleId,
                RoleName = entity.Role != null ? entity.Role.Name : "",
            };
        }

        public static ApplicationUserRole MapViewModelToEntity(UserRoleViewModel viewModel)
        {
            if (viewModel == null)
            {
                return null;
            }

            var entity = new ApplicationUserRole()
            {
                RoleId = viewModel.RoleId,
            };

            if (viewModel.UserId.HasValue)
            {
                entity.UserId = viewModel.UserId.Value;
            }

            return entity;
        }
    }
}
