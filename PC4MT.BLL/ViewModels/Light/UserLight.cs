using PC4MT.DAL.Data.Models;
using System;

namespace PC4MT.BLL.ViewModels.Light
{
    public class UserLight
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public static UserLight MapEntityToInterface(User entity)
        {
            if (entity == null)
            {
                return null;
            }

            return new UserLight()
            {
                Id = entity.Id,
                Name = entity.Name,
                Email = entity.Email,
            };
        }
    }
}
