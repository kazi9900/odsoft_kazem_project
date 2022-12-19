using Microsoft.EntityFrameworkCore;
using PC4MT.DAL.Context;
using PC4MT.DAL.Data.Models;
using PC4MT.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PC4MT.DAL.Repositories
{
    public class TranslationRepository : ITranslationRepository
    {
        private PC4MTContext _pc4mtContext;

        public TranslationRepository(PC4MTContext pc4mtContext)
        {
            _pc4mtContext = pc4mtContext;
        }

        Translation ITranslationRepository.GetTranslationById(int translationId)
        {
            try
            {
                return _pc4mtContext.Translations
                    .Where(x => x.Id == translationId)
                    .FirstOrDefault();
            }
            catch (Exception) { throw; }
        }

        Translation ITranslationRepository.GetTranslation(int sentenceL1Id, int sentenceL2Id)
        {
            try
            {
                return _pc4mtContext.Translations
                    .Include(x => x.SentenceLanguage2.TranslationsSentenceLanguage1)
                        .ThenInclude(x => x.SentenceLanguage2)
                    .Include(x => x.SentenceLanguage2.TranslationsSentenceLanguage2)
                    .Include(x => x.SentenceLanguage1.TranslationsSentenceLanguage1)
                    .Include(x => x.SentenceLanguage1.TranslationsSentenceLanguage2)
                    .Where(x => (x.SentenceLanguage1Id == sentenceL1Id && x.SentenceLanguage2Id == sentenceL2Id) || (x.SentenceLanguage1Id == sentenceL2Id && x.SentenceLanguage2Id == sentenceL1Id))
                    .FirstOrDefault();
            }
            catch (Exception) { throw; }
        }

        Sentence ITranslationRepository.GetSentenceWithTranslations(int sentenceId)
        {
            try
            {
                return _pc4mtContext.Sentences
                    .Include(x => x.TranslationsSentenceLanguage1)
                    .ThenInclude(x => x.SentenceLanguage2)
                    .Include(x => x.TranslationsSentenceLanguage2)
                    .ThenInclude(x => x.SentenceLanguage1)
                    .Where(x => x.Id == sentenceId)
                    .FirstOrDefault();
            }
            catch (Exception) { throw; }
        }

        IEnumerable<Translation> ITranslationRepository.GetTranslationsFromLanguage(int languageId, int projectId)
        {
            try
            {
                return _pc4mtContext.Translations
                    .Include(x => x.SentenceLanguage1.Language)
                    .Include(x => x.SentenceLanguage2.Language)
                    .Include(x => x.TranslationLikes)
                    .Where(x => (x.SentenceLanguage1.LanguageId == languageId && (projectId == 0 || x.SentenceLanguage1.ProjectId == projectId)) ||
                        x.SentenceLanguage2.LanguageId == languageId && (projectId == 0 || x.SentenceLanguage2.ProjectId == projectId))
                    .ToList();
            }
            catch (Exception) { throw; }
        }

        IEnumerable<Translation> ITranslationRepository.GetTranslationsFromLanguage1ToLanguage2(int language1Id, int language2Id, int projectId)
        {
            try
            {
                return _pc4mtContext.Translations
                    .Include(x => x.SentenceLanguage1)
                    .Include(x => x.SentenceLanguage2)
                    .Include(x => x.TranslationLikes)
                    .Where(x => (projectId == 0 || x.SentenceLanguage1.ProjectId == projectId) &&
                                (x.SentenceLanguage1.LanguageId == language1Id && x.SentenceLanguage2.LanguageId == language2Id) ||
                                    (x.SentenceLanguage1.LanguageId == language2Id && x.SentenceLanguage2.LanguageId == language1Id))
                    .ToList();
            }
            catch (Exception) { throw; }
        }

        IEnumerable<Sentence> ITranslationRepository.GetSentencesByLanguageId(int languageId)
        {
            try
            {
                return _pc4mtContext.Sentences
                    .Where(x => x.LanguageId == languageId)
                    .ToList();
            }
            catch (Exception) { throw; }
        }

        Translation ITranslationRepository.InsertTranslation(Translation translation)
        {
            try
            {
                _pc4mtContext.Translations.Add(translation);
                _pc4mtContext.SaveChanges();
                return translation;
            }
            catch (Exception) { throw; }
        }

        Translation ITranslationRepository.UpdateTranslation(Translation translation)
        {
            try
            {
                _pc4mtContext.Translations.Update(translation);
                _pc4mtContext.SaveChanges();
                return translation;
            }
            catch (Exception) { throw; }
        }

        bool ITranslationRepository.DeleteTranslation(Translation translation)
        {
            try
            {
                _pc4mtContext.Translations.Remove(translation);
                _pc4mtContext.SaveChanges();
                return true;
            }
            catch (Exception) { throw; }
        }

        ProficiencyUser ITranslationRepository.InsertProficiencyLanguage(ProficiencyUser proficiencyLanguage)
        {
            try
            {
                _pc4mtContext.ProficiencyUsers.Add(proficiencyLanguage);
                _pc4mtContext.SaveChanges();
                return proficiencyLanguage;
            }
            catch (Exception) { throw; }
        }

        TranslationLike ITranslationRepository.InsertTranslationLike(TranslationLike translationLike)
        {
            try
            {
                _pc4mtContext.TranslationLikes.Add(translationLike);
                _pc4mtContext.SaveChanges();
                return translationLike;
            }
            catch (Exception) { throw; }
        }

        TranslationLike ITranslationRepository.UpdateTranslationLike(TranslationLike translationLike)
        {
            try
            {
                _pc4mtContext.TranslationLikes.Update(translationLike);
                _pc4mtContext.SaveChanges();
                return translationLike;
            }
            catch (Exception) { throw; }
        }

        IEnumerable<Sentence> ITranslationRepository.InsertSentences(IEnumerable<Sentence> sentences)
        {
            try
            {
                _pc4mtContext.Sentences.AddRange(sentences);
                _pc4mtContext.SaveChanges();

                return sentences;
            }
            catch (Exception) { throw; }
        }

        IEnumerable<Sentence> ITranslationRepository.GetSentencesWithTranslations(int? language1Id, int? language2Id, int? projectId)
        {
            try
            {
                return _pc4mtContext.Sentences
                    .Include(x => x.TranslationsSentenceLanguage2)
                        .ThenInclude(x => x.SentenceLanguage1)
                    .Include(x => x.TranslationsSentenceLanguage1)
                        .ThenInclude(x => x.SentenceLanguage2)
                    .Where(x => x.LanguageId == language1Id && (projectId == 0 || x.ProjectId == projectId))
                    .ToList();
            }
            catch (Exception) { throw; }
        }

        int ITranslationRepository.GetNumberTranslationFromSentenceToLanguage(int sentenceId, int languageId)
        {
            try
            {
                return _pc4mtContext.Sentences
                    .Where(x => x.Id == sentenceId)
                    .Select(x => x.TranslationsSentenceLanguage1.Where(x => x.SentenceLanguage2.LanguageId == languageId).Count() + x.TranslationsSentenceLanguage2.Where(x => x.SentenceLanguage1.LanguageId == languageId).Count())
                    .FirstOrDefault();
            }
            catch (Exception) { throw; }
        }

        bool ITranslationRepository.ExistsSomeSentenceByUserIdAndLanguageId(int userId, int languageId)
        {
            try
            {
                return _pc4mtContext.Sentences
                    .Any(x => x.LanguageId == languageId && (x.UserCreationId == userId || x.UserChangeId == userId));
            }
            catch (Exception) { throw; }
        }
    }
}
