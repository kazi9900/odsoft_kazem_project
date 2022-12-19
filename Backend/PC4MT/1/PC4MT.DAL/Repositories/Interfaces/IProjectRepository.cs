using PC4MT.DAL.Data.Models;
using System.Collections.Generic;

namespace PC4MT.DAL.Repositories.Interfaces
{
    public interface IProjectRepository
    {
        IEnumerable<Project> GetProjects();

        Project GetProjectById(int id);

        Project InsertProject(Project project);

        Project UpdateProject(Project project);
    }
}
