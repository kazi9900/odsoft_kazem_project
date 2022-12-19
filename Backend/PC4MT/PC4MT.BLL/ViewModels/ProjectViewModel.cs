using PC4MT.DAL.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PC4MT.BLL.ViewModels
{
    public class ProjectViewModel
    {
        public int? Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Language1Id { get; set; }

        public string Language1Name { get; set; }

        public int Language2Id { get; set; }

        public string Language2Name { get; set; }

        public bool? Active { get; set; }

        public int? UserCreationId { get; set; }

        public DateTime? DateCreation { get; set; }

        public int? UserChangeId { get; set; }

        public DateTime? DateChange { get; set; }

        public IEnumerable<ProjectUserViewModel> ProjectUsers { get; set; }

        public int? CountSentencesL1 { get; set; }

        public int? CountSentencesL1WithTranslation { get; set; }

        public static ProjectViewModel MapEntityToViewModel(Project entity, bool trackProjectUsers = true)
        {
            if (entity == null)
            {
                return null;
            }

            return new ProjectViewModel()
            {
                Id = entity.Id,
                Name = entity.Name,
                Description = entity.Description,
                Language1Id = entity.Language1Id,
                Language1Name = entity.Language1 != null ? entity.Language1.Name : "",
                Language2Id = entity.Language2Id,
                Language2Name = entity.Language2 != null ? entity.Language2.Name : "",
                Active = entity.Active,
                UserCreationId = entity.UserCreationId,
                DateCreation = entity.DateCreation,
                UserChangeId = entity.UserChangeId,
                DateChange = entity.DateChange,
                ProjectUsers = entity.ProjectUsers != null && entity.ProjectUsers.Count() > 0 ?
                    entity.ProjectUsers
                        .Select(x => ProjectUserViewModel.MapEntityToViewModel(x, trackProjectUsers))
                        .ToList() : new List<ProjectUserViewModel>(),
                CountSentencesL1 = entity.Sentences == null ? 0 : entity.Sentences.Where(x => x.LanguageId == entity.Language1Id).Count(),
                CountSentencesL1WithTranslation = entity.Sentences == null ? 0 :
                entity.Sentences.Where(x => x.LanguageId == entity.Language1Id &&
                (x.TranslationsSentenceLanguage2.Any(y => y.SentenceLanguage1.LanguageId == entity.Language2Id) ||
                 x.TranslationsSentenceLanguage1.Any(y => y.SentenceLanguage2.LanguageId == entity.Language2Id)
                )).Count()
            };
        }

        public static Project MapViewModelToEntity(ProjectViewModel viewModel)
        {
            if (viewModel == null)
            {
                return null;
            }

            var entity = new Project()
            {
                Name = viewModel.Name,
                Description = viewModel.Description,
                Language1Id = viewModel.Language1Id,
                Language2Id = viewModel.Language2Id,
                Active = viewModel.Active,
                UserCreationId = viewModel.UserCreationId,
                DateCreation = viewModel.DateCreation,
                UserChangeId = viewModel.UserChangeId,
                DateChange = viewModel.DateChange,
                ProjectUsers = viewModel.ProjectUsers != null || viewModel.ProjectUsers.Count() > 0 ?
                    viewModel.ProjectUsers
                        .Select(x => ProjectUserViewModel.MapViewModelToEntity(x))
                        .ToList() : new List<ProjectUser>(),
            };

            if (viewModel.Id.HasValue)
            {
                entity.Id = viewModel.Id.Value;
            }

            return entity;
        }
    }
}
