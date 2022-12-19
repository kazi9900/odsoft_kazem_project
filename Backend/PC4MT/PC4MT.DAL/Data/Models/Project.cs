using System;
using System.Collections.Generic;

namespace PC4MT.DAL.Data.Models
{
    public class Project
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Language1Id { get; set; }

        public int Language2Id { get; set; }

        public bool? Active { get; set; }

        public int? UserCreationId { get; set; }

        public DateTime? DateCreation { get; set; }

        public int? UserChangeId { get; set; }

        public DateTime? DateChange { get; set; }

        // RELATIONS

        public virtual User UserCreation { get; set; }

        public virtual User UserChange { get; set; }

        public virtual Language Language1 { get; set; }

        public virtual Language Language2 { get; set; }

        public ICollection<ProjectUser> ProjectUsers { get; set; }

        public ICollection<Sentence> Sentences { get; set; }

    }
}
