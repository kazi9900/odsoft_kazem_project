using PC4MT.BLL.DTO;
using PC4MT.BLL.DTO.Language;
using PC4MT.BLL.DTO.Project;
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
    public class ContributeService : IContributeService
    {
        private readonly ILanguageRepository _languageRepository;
        private readonly IProjectRepository _projectRepository;
        private readonly ITranslationRepository _translationRepository;
        private readonly IUserRepository _userRepository;

        public ContributeService(
            ILanguageRepository languageRepository,
            IProjectRepository projectRepository,
            ITranslationRepository translationRepository,
            IUserRepository userRepository)
        {
            _languageRepository = languageRepository;
            _projectRepository = projectRepository;
            _translationRepository = translationRepository;
            _userRepository = userRepository;
        }

        IEnumerable<SentenceDTO> IContributeService.GetSentencesByLanguageId(int languageId)
        {
            try
            {
                return _translationRepository.GetSentencesByLanguageId(languageId)
                    .Select(x => new SentenceDTO()
                    {
                        Id = x.Id,
                        Text = x.Text,
                        LanguageId = x.LanguageId,
                        UserCreationId = x.UserCreationId,
                        DateCreation = x.DateCreation,
                        UserChangeId = x.UserChangeId,
                        DateChange = x.DateChange
                    }).ToList();
            }
            catch (Exception) { throw; }
        }

        IEnumerable<SentenceDTO> IContributeService.GetSentencesByLanguageIdWithLastTranslationToLanguageId(int language1Id, int language2Id, int? projectId)
        {
            try
            {
                var sentences = _translationRepository.GetSentencesWithTranslations(language1Id, language2Id, projectId);

                if (sentences == null)
                {
                    return null;
                }

                var ret = new List<SentenceDTO>();

                foreach (Sentence sentence in sentences)
                {
                    var lastTranslationSign = sentence.TranslationsSentenceLanguage1
                        .Where(x => x.SentenceLanguage2.LanguageId == language2Id)
                        .OrderByDescending(x => x.DateChange)
                        .FirstOrDefault();

                    var lastTranslationSpoken = sentence.TranslationsSentenceLanguage2
                        .Where(x => x.SentenceLanguage1.LanguageId == language2Id)
                        .OrderByDescending(x => x.DateChange)
                        .FirstOrDefault();

                    Sentence lastSentenceTranslation = null;
                    int? lastSentenceTranslationId = null;

                    int countTranslationsL1 = sentence.TranslationsSentenceLanguage1 != null ? sentence.TranslationsSentenceLanguage1.Where(x => x.SentenceLanguage2.LanguageId == language2Id).Count() : 0;
                    int countTranslationsL2 = sentence.TranslationsSentenceLanguage2 != null ? sentence.TranslationsSentenceLanguage2.Where(x => x.SentenceLanguage1.LanguageId == language2Id).Count() : 0;
                    int countTranslations = countTranslationsL1 + countTranslationsL2;

                    if (lastTranslationSign != null && lastTranslationSpoken != null)
                    {
                        lastSentenceTranslation = lastTranslationSign.DateChange > lastTranslationSpoken.DateChange ?
                            lastTranslationSign.SentenceLanguage2 : lastTranslationSpoken.SentenceLanguage1;
                        lastSentenceTranslationId = lastTranslationSign.DateChange > lastTranslationSpoken.DateChange ?
                            lastTranslationSign.Id : lastTranslationSpoken.Id;
                    }
                    else
                    {
                        lastSentenceTranslation = lastTranslationSign != null ?
                            lastTranslationSign.SentenceLanguage2 : lastTranslationSpoken != null ?
                                lastTranslationSpoken.SentenceLanguage1 : null;
                        lastSentenceTranslationId = lastTranslationSign != null ?
                            lastTranslationSign.Id : lastTranslationSpoken?.Id;
                    }

                    var sentenceDTO = new SentenceDTO()
                    {
                        Id = sentence.Id,
                        Text = sentence.Text,
                        LanguageId = sentence.LanguageId,
                        ProjectId = sentence.ProjectId,
                        UserCreationId = sentence.UserCreationId,
                        DateCreation = sentence.DateCreation,
                        UserChangeId = sentence.UserChangeId,
                        DateChange = sentence.DateChange,
                        CountTranslations = countTranslations,
                        LastSentenceTranslationId = lastSentenceTranslationId,
                        LastSentenceTranslation = lastSentenceTranslation == null ?
                            null : new SentenceDTO()
                            {
                                Id = lastSentenceTranslation.Id,
                                Text = lastSentenceTranslation.Text,
                                LanguageId = lastSentenceTranslation.LanguageId,
                                ProjectId = lastSentenceTranslation.ProjectId,
                                UserCreationId = lastSentenceTranslation.UserCreationId,
                                DateCreation = lastSentenceTranslation.DateCreation,
                                UserChangeId = lastSentenceTranslation.UserChangeId,
                                DateChange = lastSentenceTranslation.DateChange,
                            }
                    };

                    ret.Add(sentenceDTO);
                }

                return ret;
            }
            catch (Exception) { throw; }
        }

        IEnumerable<object> IContributeService.GetTranslationsFromLanguage(int languageId, int projectId)
        {
            try
            {
                var translations = _translationRepository.GetTranslationsFromLanguage(languageId, projectId);

                return translations
                    .Select(x => new
                    {
                        Id = x.Id,
                        SentenceL1Id = x.SentenceLanguage1.LanguageId == languageId ? x.SentenceLanguage1Id : x.SentenceLanguage2Id,
                        SentenceL2Id = x.SentenceLanguage1.LanguageId == languageId ? x.SentenceLanguage2Id : x.SentenceLanguage1Id,
                        SentenceL1 = x.SentenceLanguage1.LanguageId == languageId ? new
                        {
                            x.SentenceLanguage1.Id,
                            x.SentenceLanguage1.Text,
                            x.SentenceLanguage1.LanguageId,
                            LanguageDescr = x.SentenceLanguage1.Language.Name
                        } : new
                        {
                            x.SentenceLanguage2.Id,
                            x.SentenceLanguage2.Text,
                            x.SentenceLanguage2.LanguageId,
                            LanguageDescr = x.SentenceLanguage2.Language.Name
                        },
                        SentenceL2 = x.SentenceLanguage1.LanguageId == languageId ? new
                        {
                            x.SentenceLanguage2.Id,
                            x.SentenceLanguage2.Text,
                            x.SentenceLanguage2.LanguageId,
                            LanguageDescr = x.SentenceLanguage2.Language.Name
                        } : new
                        {
                            x.SentenceLanguage1.Id,
                            x.SentenceLanguage1.Text,
                            x.SentenceLanguage1.LanguageId,
                            LanguageDescr = x.SentenceLanguage1.Language.Name
                        },
                        TranslationLikes = x.TranslationLikes.Select(x => new
                        {
                            x.UserId,
                            x.TranslationId,
                            x.Like
                        }).ToList(),
                    })
                    .GroupBy(x => x.SentenceL1)
                    .Select(x => new
                    {
                        Sentence = new SentenceDTO()
                        {
                            Id = x.Key.Id,
                            Text = x.Key.Text,
                            LanguageId = x.Key.LanguageId,
                        },
                        Translations = x.Select(t => new
                        {
                            Id = t.Id,
                            SentenceL2 = new
                            {
                                Id = t.SentenceL2.Id,
                                Text = t.SentenceL2.Text,
                                LanguageId = t.SentenceL2.LanguageId,
                                LanguageDescr = t.SentenceL2.LanguageDescr,
                            },
                            TranslationLikes = t.TranslationLikes
                        })
                    }).ToList();
            }
            catch (Exception) { throw; }
        }

        IEnumerable<TranslationLight> IContributeService.GetTranslationsFromLanguage1ToLanguage2(int language1, int language2, int projectId)
        {
            try
            {
                var translations = _translationRepository.GetTranslationsFromLanguage1ToLanguage2(language1, language2, projectId);

                var translationDirect = translations.Where(x => x.SentenceLanguage1.LanguageId == language1).Select(x => TranslationLight.MapEntityToInterface(x)).ToList();
                var translationIndirect = translations.Where(x => x.SentenceLanguage2.LanguageId == language1).Select(x => TranslationLight.MapEntityToInterface(x)).ToList();

                var result = translationDirect.Concat(translationIndirect);
                return result.OrderBy(x => x.SentenceL1).ThenBy(x => x.SentenceL2);
            }
            catch (Exception) { throw; }
        }

        IEnumerable<ProjectUserViewModel> IContributeService.GetUserProjectsByUserId(int userId)
        {
            try
            {
                return _userRepository.GetUserProjectsByUserId(userId)
                    .Select(x => ProjectUserViewModel.MapEntityToViewModel(x)).ToList();

            }
            catch (Exception) { throw; }
        }

        LoadDadosContributeDTO IContributeService.LoadDadosContribute()
        {
            try
            {
                var languages = _languageRepository.GetLanguages().
                    Select(x => new LanguageDTO()
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Abbreviation = x.Abbreviation,
                        TypeLanguage = x.Type
                    }).ToList();

                var projects = _projectRepository.GetProjects()
                    .Select(x => new ProjectDTO()
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Descr = x.Description,
                        Language1Id = x.Language1Id,
                        Language2Id = x.Language2Id
                    }).ToList();

                return new LoadDadosContributeDTO()
                {
                    Languages = languages,
                    Projects = projects
                };
            }
            catch (Exception) { throw; }
        }
        SentenceDTO IContributeService.AddTranslation(TranslationDTO translation)
        {
            try
            {
                var _now = DateTime.Now;

                var newTranslation = new Translation()
                {
                    UserCreationId = translation.UserCreationId,
                    DateCreation = _now,
                    UserChangeId = translation.UserChangeId,
                    DateChange = _now,

                    SentenceLanguage1 = translation.SentenceSpokenId.HasValue ? null : new Sentence()
                    {
                        LanguageId = translation.SentenceSpoken.LanguageId,
                        ProjectId = translation.SentenceSpoken.ProjectId,
                        Text = translation.SentenceSpoken.Text,
                        Canceled = translation.SentenceSpoken.Canceled,
                        UserCreationId = translation.SentenceSpoken.UserCreationId,
                        DateCreation = _now,
                        UserChangeId = translation.SentenceSpoken.UserCreationId,
                        DateChange = _now
                    },

                    SentenceLanguage2 = translation.SentenceSignId.HasValue ? null : new Sentence()
                    {
                        LanguageId = translation.SentenceSign.LanguageId,
                        ProjectId = translation.SentenceSign.ProjectId,
                        Text = translation.SentenceSign.Text,
                        Canceled = translation.SentenceSign.Canceled,
                        UserCreationId = translation.SentenceSign.UserCreationId,
                        DateCreation = _now,
                        UserChangeId = translation.SentenceSign.UserCreationId,
                        DateChange = _now
                    }

                };

                if (translation.SentenceSpokenId.HasValue)
                {
                    newTranslation.SentenceLanguage1Id = translation.SentenceSpokenId.Value;
                }

                if (translation.SentenceSignId.HasValue)
                {
                    newTranslation.SentenceLanguage2Id = translation.SentenceSignId.Value;

                }

                var result = _translationRepository.InsertTranslation(newTranslation);

                var translationDB = _translationRepository.GetTranslation(result.SentenceLanguage1Id, result.SentenceLanguage2Id);

                return new SentenceDTO()
                {
                    Id = translationDB.SentenceLanguage1.Id,
                    Text = translationDB.SentenceLanguage1.Text,
                    LanguageId = translationDB.SentenceLanguage1.LanguageId,
                    ProjectId = translationDB.SentenceLanguage1.ProjectId,
                    UserCreationId = translationDB.SentenceLanguage1.UserCreationId,
                    DateCreation = translationDB.SentenceLanguage1.DateCreation,
                    UserChangeId = translationDB.SentenceLanguage1.UserChangeId,
                    DateChange = translationDB.SentenceLanguage1.DateChange,
                    Canceled = translationDB.SentenceLanguage1.Canceled,
                    CountTranslations = _translationRepository.GetNumberTranslationFromSentenceToLanguage(translationDB.SentenceLanguage1.Id, translationDB.SentenceLanguage2.LanguageId),
                    LastSentenceTranslationId = translationDB.Id,
                    LastSentenceTranslation = new SentenceDTO()
                    {
                        Id = translationDB.SentenceLanguage2.Id,
                        Text = translationDB.SentenceLanguage2.Text,
                        LanguageId = translationDB.SentenceLanguage2.LanguageId,
                        ProjectId = translationDB.SentenceLanguage2.ProjectId,
                        UserCreationId = translationDB.SentenceLanguage2.UserCreationId,
                        DateCreation = translationDB.SentenceLanguage2.DateCreation,
                        UserChangeId = translationDB.SentenceLanguage2.UserChangeId,
                        DateChange = translationDB.SentenceLanguage2.DateChange,
                        Canceled = translationDB.SentenceLanguage2.Canceled
                    }
                };
            }
            catch (Exception) { throw; }
        }

        SentenceDTO IContributeService.UpdateTranslation(TranslationDTO translation)
        {
            try
            {
                Translation translationDB = _translationRepository.GetTranslation(translation.SentenceSpokenId.Value, translation.SentenceSignId.Value);
                DateTime _now = DateTime.Now;

                if (translationDB != null)
                {
                    translationDB.DateChange = _now;
                    translationDB.UserChangeId = translation.UserChangeId;

                    if (translation.SentenceSignId == translationDB.SentenceLanguage2Id)
                    {
                        translationDB.SentenceLanguage2.Text = translation.SentenceSign.Text;
                        translationDB.SentenceLanguage2.DateChange = _now;
                        translationDB.SentenceLanguage2.UserChangeId = translation.SentenceSign.UserChangeId;
                    }
                    else
                    {
                        translationDB.SentenceLanguage1.Text = translation.SentenceSign.Text;
                        translationDB.SentenceLanguage1.DateChange = _now;
                        translationDB.SentenceLanguage1.UserChangeId = translation.SentenceSign.UserChangeId;

                    }
                }

                var result = _translationRepository.UpdateTranslation(translationDB);

                if (translation.SentenceSignId == translationDB.SentenceLanguage2Id)
                {
                    return new SentenceDTO()
                    {
                        Id = result.SentenceLanguage1.Id,
                        Text = result.SentenceLanguage1.Text,
                        LanguageId = result.SentenceLanguage1.LanguageId,
                        UserCreationId = result.SentenceLanguage1.UserCreationId,
                        DateCreation = result.SentenceLanguage1.DateCreation,
                        UserChangeId = result.SentenceLanguage1.UserChangeId,
                        DateChange = result.SentenceLanguage1.DateChange,
                        CountTranslations = _translationRepository.GetNumberTranslationFromSentenceToLanguage(result.SentenceLanguage1.Id, result.SentenceLanguage2.LanguageId),
                        LastSentenceTranslationId = result.Id,
                        LastSentenceTranslation = new SentenceDTO()
                        {
                            Id = result.SentenceLanguage2.Id,
                            Text = result.SentenceLanguage2.Text,
                            LanguageId = result.SentenceLanguage2.LanguageId,
                            UserCreationId = result.SentenceLanguage2.UserCreationId,
                            DateCreation = result.SentenceLanguage2.DateCreation,
                            UserChangeId = result.SentenceLanguage2.UserChangeId,
                            DateChange = result.SentenceLanguage2.DateChange,
                        }
                    };
                }
                else
                {
                    return new SentenceDTO()
                    {
                        Id = result.SentenceLanguage2.Id,
                        Text = result.SentenceLanguage2.Text,
                        LanguageId = result.SentenceLanguage2.LanguageId,
                        UserCreationId = result.SentenceLanguage2.UserCreationId,
                        DateCreation = result.SentenceLanguage2.DateCreation,
                        UserChangeId = result.SentenceLanguage2.UserChangeId,
                        DateChange = result.SentenceLanguage2.DateChange,
                        LastSentenceTranslation = new SentenceDTO()
                        {
                            Id = result.SentenceLanguage1.Id,
                            Text = result.SentenceLanguage1.Text,
                            LanguageId = result.SentenceLanguage1.LanguageId,
                            UserCreationId = result.SentenceLanguage1.UserCreationId,
                            DateCreation = result.SentenceLanguage1.DateCreation,
                            UserChangeId = result.SentenceLanguage1.UserChangeId,
                            DateChange = result.SentenceLanguage1.DateChange,
                        }
                    };
                }
            }
            catch (Exception) { throw; }
        }

        SentenceDTO IContributeService.DeleteTranslation(int translationId, int sentenceId)
        {
            try
            {
                Translation translationDB = _translationRepository.GetTranslationById(translationId);
                if (translationDB != null)
                {
                    _translationRepository.DeleteTranslation(translationDB);

                    var sentence = _translationRepository.GetSentenceWithTranslations(sentenceId);

                    if (sentence != null)
                    {

                        var lastTranslationL1ToL2 = sentence.TranslationsSentenceLanguage1
                            .OrderByDescending(x => x.DateChange)
                            .FirstOrDefault();

                        var lastTranslationL2ToL1 = sentence.TranslationsSentenceLanguage2
                            .OrderByDescending(x => x.DateChange)
                            .FirstOrDefault();

                        Sentence lastSentenceTranslation = null;
                        int? lastSentenceTranslationId = null;

                        int countTranslationsL1 = sentence.TranslationsSentenceLanguage1 != null ? sentence.TranslationsSentenceLanguage1.Count() : 0;
                        int countTranslationsL2 = sentence.TranslationsSentenceLanguage2 != null ? sentence.TranslationsSentenceLanguage2.Count() : 0;
                        int countTranslations = countTranslationsL1 + countTranslationsL2;

                        if (lastTranslationL1ToL2 != null && lastTranslationL2ToL1 != null)
                        {
                            lastSentenceTranslation = lastTranslationL1ToL2.DateChange > lastTranslationL2ToL1.DateChange ?
                                lastTranslationL1ToL2.SentenceLanguage2 : lastTranslationL2ToL1.SentenceLanguage1;
                            lastSentenceTranslationId = lastTranslationL1ToL2.DateChange > lastTranslationL2ToL1.DateChange ?
                                lastTranslationL1ToL2.Id : lastTranslationL2ToL1.Id;
                        }
                        else
                        {
                            lastSentenceTranslation = lastTranslationL1ToL2 != null ?
                                lastTranslationL1ToL2.SentenceLanguage2 : lastTranslationL2ToL1 != null ?
                                    lastTranslationL2ToL1.SentenceLanguage1 : null;
                            lastSentenceTranslationId = lastTranslationL1ToL2 != null ?
                                lastTranslationL1ToL2.Id : lastTranslationL2ToL1?.Id;
                        }

                        var sentenceDTO = new SentenceDTO()
                        {
                            Id = sentence.Id,
                            Text = sentence.Text,
                            LanguageId = sentence.LanguageId,
                            ProjectId = sentence.ProjectId,
                            UserCreationId = sentence.UserCreationId,
                            DateCreation = sentence.DateCreation,
                            UserChangeId = sentence.UserChangeId,
                            DateChange = sentence.DateChange,
                            CountTranslations = countTranslations,
                            LastSentenceTranslationId = lastSentenceTranslationId,
                            LastSentenceTranslation = lastSentenceTranslation == null ?
                                null : new SentenceDTO()
                                {
                                    Id = lastSentenceTranslation.Id,
                                    Text = lastSentenceTranslation.Text,
                                    LanguageId = lastSentenceTranslation.LanguageId,
                                    ProjectId = lastSentenceTranslation.ProjectId,
                                    UserCreationId = lastSentenceTranslation.UserCreationId,
                                    DateCreation = lastSentenceTranslation.DateCreation,
                                    UserChangeId = lastSentenceTranslation.UserChangeId,
                                    DateChange = lastSentenceTranslation.DateChange,
                                }
                        };


                        return sentenceDTO;
                    }
                }

                return null;
            }
            catch (Exception) { throw; }
        }

        ProficiencyLanguageDTO IContributeService.AddProficiencyLanguage(ProficiencyLanguageDTO proficiencyLanguage)
        {
            try
            {
                var newProficiencyLanguage = new ProficiencyUser()
                {
                    UserId = proficiencyLanguage.UserId.Value,
                    LanguageId = proficiencyLanguage.LanguageId,
                    LevelProficiency = proficiencyLanguage.LevelProficiency
                };

                _translationRepository.InsertProficiencyLanguage(newProficiencyLanguage);

                return proficiencyLanguage;
            }
            catch (Exception) { throw; }
        }

        TranslationLikeDTO IContributeService.AddTranslationLike(TranslationLikeDTO translationLike)
        {
            try
            {
                var newTranslationLike = new TranslationLike()
                {
                    UserId = translationLike.UserId,
                    TranslationId = translationLike.TranslationId,
                    Like = translationLike.Like,
                };

                var result = _translationRepository.InsertTranslationLike(newTranslationLike);

                return translationLike;
            }
            catch (Exception) { throw; }
        }

        TranslationLikeDTO IContributeService.UpdateTranslationLike(TranslationLikeDTO translationLike)
        {
            try
            {
                var translationLikeDB = new TranslationLike()
                {
                    UserId = translationLike.UserId,
                    TranslationId = translationLike.TranslationId,
                    Like = translationLike.Like,
                };

                var result = _translationRepository.UpdateTranslationLike(translationLikeDB);

                return translationLike;
            }
            catch (Exception) { throw; }
        }

        IEnumerable<SentenceDTO> IContributeService.AddSentences(IEnumerable<SentenceDTO> sentences)
        {
            try
            {
                var _now = DateTime.Now;

                var sentencesDB = sentences.Select(x => new Sentence()
                {
                    ProjectId = x.ProjectId,
                    LanguageId = x.LanguageId,
                    Text = x.Text,
                    Canceled = x.Canceled,
                    UserCreationId = x.UserCreationId,
                    DateCreation = _now,
                    UserChangeId = x.UserChangeId,
                    DateChange = _now,
                }).ToList();

                var result = _translationRepository.InsertSentences(sentencesDB);

                return result.Select(x => new SentenceDTO()
                {
                    Id = x.Id,
                    ProjectId = x.ProjectId,
                    LanguageId = x.LanguageId,
                    Text = x.Text,
                    Canceled = x.Canceled,
                    UserCreationId = x.UserCreationId,
                    DateCreation = x.DateCreation,
                    UserChangeId = x.UserChangeId,
                    DateChange = x.DateChange,
                    CountTranslations = 0,
                    LastSentenceTranslationId = null,
                    LastSentenceTranslation = null
                }).ToList();
            }
            catch (Exception) { throw; }
        }

        ProjectUserViewModel IContributeService.InsertProjectUser(ProjectUserViewModel projectUser)
        {
            try
            {
                var projectUserDB = ProjectUserViewModel.MapViewModelToEntity(projectUser);
                var result = _userRepository.InsertProjectUser(projectUserDB);

                return ProjectUserViewModel.MapEntityToViewModel(_userRepository.GetUserProjectByUserIdAndProjectId(projectUserDB.UserId, projectUserDB.ProjectId));
            }
            catch (Exception) { throw; }
        }
    }
}
