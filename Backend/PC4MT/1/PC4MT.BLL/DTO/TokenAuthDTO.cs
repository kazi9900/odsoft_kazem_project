using System;

namespace PC4MT.BLL.DTO
{
    public class TokenAuthDTO
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Token { get; set; }

        public DateTime Expiration { get; set; }

        public int? RoleId { get; set; }
    }
}
