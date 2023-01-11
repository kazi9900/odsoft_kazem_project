using PC4MT.DAL.Data.Models;
using System.Collections.Generic;

namespace PC4MT.DAL.Repositories.Interfaces
{
    public interface ITranslationRepository
    {
        Translation GetTranslationById(int translationId);

        Translation GetTranslation(int sentenceL1Id, int sentenceL2Id);

        Sentence GetSentenceWithTranslations(int sentenceId);

        IEnumerable<Translation> GetTranslationsFromLanguage(int languageId, int projectId);

        IEnumerable<Translation> GetTranslationsFromLanguage1ToLanguage2(int language1Id, int language2d, int projectId);

        IEnumerable<Sentence> GetSentencesByLanguageId(int languageId);

        IEnumerable<Sentence> GetSentencesWithTranslations(int? language1Id, int? language2Id, int? projectId);

        int GetNumberTranslationFromSentenceToLanguage(int sentenceId, int languageId);

        bool ExistsSomeSentenceByUserIdAndLanguageId(int userId, int languageId);

        Translation InsertTranslation(Translation translation);

        Translation UpdateTranslation(Translation translation);

        bool DeleteTranslation(Translation translation);

        ProficiencyUser InsertProficiencyLanguage(ProficiencyUser proficiencyLanguage);

        TranslationLike InsertTranslationLike(TranslationLike translationLike);

        TranslationLike UpdateTranslationLike(TranslationLike translationLike);

        IEnumerable<Sentence> InsertSentences(IEnumerable<Sentence> sentences);
    }
}
