using Microsoft.AspNetCore.Mvc;
using PC4MT.BLL.Services.Interfaces;
using PC4MT.BLL.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PC4MT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaintenanceController : ControllerBase
    {
        private IMaintenanceService _maintenanceService;

        public MaintenanceController(IMaintenanceService maintenanceService)
        {
            this._maintenanceService = maintenanceService;
        }

        [HttpGet("downloadsettings")]
        public IActionResult GetDownloadSettings()
        {
            try
            {
                return Ok(_maintenanceService.GetDownloadSettigns());
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Error in loading DownloadSettings", ex = ex });
            }
        }

        [HttpGet("languages")]
        public IActionResult GetLanguages()
        {
            try
            {
                return Ok(_maintenanceService.GetLanguages());
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Error in loading Languages", ex = ex });
            }
        }

        [HttpGet("projects")]
        public IActionResult GetProjects()
        {
            try
            {
                return Ok(_maintenanceService.GetProjects());
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Error in loading Projects", ex = ex });
            }
        }

        [HttpGet("users")]
        public IActionResult GetUsers()
        {
            try
            {
                return Ok(_maintenanceService.GetUsers());
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Error in loading Users", ex = ex });
            }
        }

        [HttpGet("userslight")]
        public IActionResult GetUsersLight()
        {
            try
            {
                return Ok(_maintenanceService.GetUsersLight());
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Error in loading UsersLight", ex = ex });
            }
        }

        [HttpPost("downloadsettings")]
        public IActionResult AddDownloadSettings([FromBody] DownloadSettingsViewModel downloadSettings)
        {
            try
            {
                return Ok(_maintenanceService.AddDownloadSettings(downloadSettings));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in adding a new DownloadSettings", ex = ex });
            }
        }

        [HttpPut("downloadsettings")]
        public IActionResult UpdateDownloadSettings([FromBody] DownloadSettingsViewModel downloadSettings)
        {
            try
            {
                return Ok(_maintenanceService.UpdateDownloadSettings(downloadSettings));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in updating a DownloadSettings", ex = ex });
            }
        }

        [HttpPost("language")]
        public IActionResult AddLanguage([FromBody] LanguageViewModel language)
        {
            try
            {
                return Ok(_maintenanceService.AddLanguage(language));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in adding a new Language", ex = ex });
            }
        }

        [HttpPut("language")]
        public IActionResult UpdateLanguage([FromBody] LanguageViewModel language)
        {
            try
            {
                return Ok(_maintenanceService.UpdateLanguage(language));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in updating a Language", ex = ex });
            }
        }

        [HttpPost("project")]
        public IActionResult AddProject([FromBody] ProjectViewModel project)
        {
            try
            {
                return Ok(_maintenanceService.AddProject(project));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in adding a new Project", ex = ex });
            }
        }

        [HttpPut("project")]
        public IActionResult UpdateProject([FromBody] ProjectViewModel project)
        {
            try
            {
                return Ok(_maintenanceService.UpdateProject(project));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in updating a Project", ex = ex });
            }
        }

        [HttpPost("user")]
        public IActionResult AddUser([FromBody] UserViewModel user)
        {
            try
            {
                return Ok(_maintenanceService.AddUser(user));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in adding a new User", ex = ex });
            }
        }

        [HttpPut("user")]
        public IActionResult UpdateUser([FromBody] UserViewModel user)
        {
            try
            {
                return Ok(_maintenanceService.UpdateUser(user));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in updating a User", ex = ex });
            }
        }
    }
}
