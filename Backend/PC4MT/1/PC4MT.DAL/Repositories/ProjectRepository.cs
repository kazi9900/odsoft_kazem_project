using Microsoft.EntityFrameworkCore;
using PC4MT.DAL.Context;
using PC4MT.DAL.Data.Models;
using PC4MT.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PC4MT.DAL.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        private PC4MTContext _pt4mtContext;

        public ProjectRepository(PC4MTContext pt4mtContext)
        {
            _pt4mtContext = pt4mtContext;
        }

        IEnumerable<Project> IProjectRepository.GetProjects()
        {
            try
            {
                return _pt4mtContext.Projects
                    .Include(x => x.ProjectUsers)
                    .ThenInclude(x => x.User)
                    .ToList();
            }
            catch (Exception) { throw; }
        }

        Project IProjectRepository.GetProjectById(int id)
        {
            try
            {
                return _pt4mtContext.Projects
                    .Include(x => x.ProjectUsers)
                    .ThenInclude(x => x.User)
                    .Include(x => x.Language1)
                    .Include(x => x.Language2)
                    .Where(x => x.Id == id)
                    .FirstOrDefault();
            }
            catch (Exception) { throw; }
        }

        Project IProjectRepository.InsertProject(Project project)
        {
            try
            {
                _pt4mtContext.Projects.Add(project);
                _pt4mtContext.SaveChanges();
                return project;
            }
            catch (Exception) { throw; }
        }

        Project IProjectRepository.UpdateProject(Project project)
        {
            try
            {
                _pt4mtContext.Projects.Update(project);
                _pt4mtContext.SaveChanges();
                return project;
            }
            catch (Exception) { throw; }
        }
    }
}
