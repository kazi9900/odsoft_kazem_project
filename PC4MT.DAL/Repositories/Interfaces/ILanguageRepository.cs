using PC4MT.DAL.Data.Models;
using System.Collections.Generic;

namespace PC4MT.DAL.Repositories.Interfaces
{
    public interface ILanguageRepository
    {
        IEnumerable<Language> GetLanguages();

        Language GetLanguageById(int id);

        Language InsertLanguage(Language language);

        Language UpdateLanguage(Language language);
    }
}
