using PC4MT.BLL.DTO;
using PC4MT.BLL.DTO.Language;
using PC4MT.BLL.ViewModels;
using PC4MT.BLL.ViewModels.Light;
using System.Collections.Generic;

namespace PC4MT.BLL.Services.Interfaces
{
    public interface IContributeService
    {
        IEnumerable<SentenceDTO> GetSentencesByLanguageId(int languageId);

        IEnumerable<SentenceDTO> GetSentencesByLanguageIdWithLastTranslationToLanguageId(int language1Id, int language2Id, int? projectId);

        IEnumerable<object> GetTranslationsFromLanguage(int languageId, int projectId);

        IEnumerable<TranslationLight> GetTranslationsFromLanguage1ToLanguage2(int language1, int language2, int projectId);

        IEnumerable<ProjectUserViewModel> GetUserProjectsByUserId(int userId);

        LoadDadosContributeDTO LoadDadosContribute();

        SentenceDTO AddTranslation(TranslationDTO translation);

        SentenceDTO UpdateTranslation(TranslationDTO translation);

        SentenceDTO DeleteTranslation(int translationId, int sentenceId);

        ProficiencyLanguageDTO AddProficiencyLanguage(ProficiencyLanguageDTO proficiencyLanguage);

        TranslationLikeDTO AddTranslationLike(TranslationLikeDTO translationLike);

        TranslationLikeDTO UpdateTranslationLike(TranslationLikeDTO translationLike);

        ProjectUserViewModel InsertProjectUser(ProjectUserViewModel projectUser);

        IEnumerable<SentenceDTO> AddSentences(IEnumerable<SentenceDTO> sentences);
    }
}
