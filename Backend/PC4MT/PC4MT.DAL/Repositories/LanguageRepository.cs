using PC4MT.DAL.Context;
using PC4MT.DAL.Data.Models;
using PC4MT.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PC4MT.DAL.Repositories
{
    public class LanguageRepository : ILanguageRepository
    {
        private PC4MTContext _pt4mtContext;

        public LanguageRepository(PC4MTContext pt4mtContext)
        {
            _pt4mtContext = pt4mtContext;
        }

        IEnumerable<Language> ILanguageRepository.GetLanguages()
        {
            try
            {
                return _pt4mtContext.Languages.ToList();
            }
            catch (Exception) { throw; }
        }

        Language ILanguageRepository.GetLanguageById(int id)
        {
            try
            {
                return _pt4mtContext.Languages.Where(x => x.Id == id).FirstOrDefault();
            }
            catch (Exception) { throw; }
        }

        Language ILanguageRepository.InsertLanguage(Language language)
        {
            try
            {
                _pt4mtContext.Languages.Add(language);
                _pt4mtContext.SaveChanges();
                return language;
            }
            catch (Exception) { throw; }
        }

        Language ILanguageRepository.UpdateLanguage(Language language)
        {
            try
            {
                _pt4mtContext.Languages.Update(language);
                _pt4mtContext.SaveChanges();
                return language;
            }
            catch (Exception) { throw; }
        }
    }
}
