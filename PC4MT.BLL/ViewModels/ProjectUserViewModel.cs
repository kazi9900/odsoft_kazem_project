using PC4MT.DAL.Data.Models;

namespace PC4MT.BLL.ViewModels
{
    public class ProjectUserViewModel
    {
        public int? UserId { get; set; }

        public string UserName { get; set; }

        public int? ProjectId { get; set; }

        public string ProjectName { get; set; }

        public bool? IsprojectOwner { get; set; }

        public bool? IsAutorized { get; set; }

        public ProjectViewModel Project { get; set; }

        public static ProjectUserViewModel MapEntityToViewModel(ProjectUser entity, bool track = true)
        {
            if (entity == null)
            {
                return null;
            }

            return new ProjectUserViewModel()
            {
                UserId = entity.UserId,
                UserName = entity.User != null ? entity.User.Name : "",
                ProjectId = entity.ProjectId,
                ProjectName = entity.Project != null ? entity.Project.Name : "",
                IsprojectOwner = entity.IsprojectOwner,
                IsAutorized = entity.IsAutorized,
                Project = track == true ? ProjectViewModel.MapEntityToViewModel(entity.Project, false) : null,
            };
        }

        public static ProjectUser MapViewModelToEntity(ProjectUserViewModel viewModel)
        {
            if (viewModel == null)
            {
                return null;
            }

            var entity = new ProjectUser()
            {
                IsprojectOwner = viewModel.IsprojectOwner,
                IsAutorized = viewModel.IsAutorized,
            };

            if (viewModel.ProjectId.HasValue)
            {
                entity.ProjectId = viewModel.ProjectId.Value;
            }

            if (viewModel.UserId.HasValue)
            {
                entity.UserId = viewModel.UserId.Value;
            }

            return entity;
        }
    }
}
