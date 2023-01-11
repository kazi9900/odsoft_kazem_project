using System;

namespace PC4MT.BLL.DTO
{
    public class TranslationLikeDTO
    {
        public int UserId { get; set; }

        public int TranslationId { get; set; }

        public bool? Like { get; set; }
    }
}
