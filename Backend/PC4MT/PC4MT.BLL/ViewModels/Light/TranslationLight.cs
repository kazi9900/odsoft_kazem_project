using PC4MT.DAL.Data.Models;

namespace PC4MT.BLL.ViewModels.Light
{
    public class TranslationLight
    {
        public string SentenceL1 { get; set; }

        public string SentenceL2 { get; set; }

        public static TranslationLight MapEntityToInterface(Translation entity, bool indirect = false)
        {
            if (entity == null)
            {
                return null;
            }

            return new TranslationLight()
            {
                SentenceL1 = indirect == false ? entity.SentenceLanguage1?.Text : entity.SentenceLanguage2?.Text,
                SentenceL2 = indirect == false ? entity.SentenceLanguage2?.Text : entity.SentenceLanguage1?.Text
            };
        }
    }
}
