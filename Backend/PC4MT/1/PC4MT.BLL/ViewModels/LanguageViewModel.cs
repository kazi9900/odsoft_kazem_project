using PC4MT.DAL.Data.Models;

namespace PC4MT.BLL.ViewModels
{
    public class LanguageViewModel
    {
        public int? Id { get; set; }

        public string Name { get; set; }

        public string Abbreviation { get; set; }

        public byte Type { get; set; }

        public static LanguageViewModel MapEntityToViewModel(Language entity)
        {
            if (entity == null)
            {
                return null;
            }

            return new LanguageViewModel()
            {
                Id = entity.Id,
                Name = entity.Name,
                Abbreviation = entity.Abbreviation,
                Type = entity.Type,
            };
        }

        public static Language MapViewModelToEntity(LanguageViewModel language)
        {
            if (language == null)
            {
                return null;
            }

            var entity = new Language()
            {
                Name = language.Name,
                Abbreviation = language.Abbreviation,
                Type = language.Type,
            };

            if (language.Id.HasValue)
            {
                entity.Id = language.Id.Value;
            }

            return entity;
        }
    }
}
