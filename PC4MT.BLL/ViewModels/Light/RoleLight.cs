using PC4MT.DAL.Data.Models;
using System;

namespace PC4MT.BLL.ViewModels.Light
{
    public class RoleLight
    {
        public int Id { get; set; }

        public string Name { get; set; }


        public static RoleLight MapEntityToInterface(ApplicationRole entity)
        {
            if (entity == null)
            {
                return null;
            }

            return new RoleLight()
            {
                Id = entity.Id,
                Name = entity.Name
            };
        }
    }
}
