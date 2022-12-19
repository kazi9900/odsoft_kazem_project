using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using PC4MT.BLL.DTO;
using PC4MT.BLL.DTO.Language;
using PC4MT.BLL.Services.Interfaces;
using PC4MT.BLL.ViewModels;
using PC4MT.Hubs;
using System;
using System.Collections.Generic;

namespace PC4MT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContributeController : ControllerBase
    {
        private IContributeService _contributeService;
        private IHubContext<PC4MTHub> _pc4mtHub;

        public ContributeController(IContributeService contributeService, IHubContext<PC4MTHub> pc4mtHub)
        {
            this._contributeService = contributeService;
            this._pc4mtHub = pc4mtHub;
        }

        [AllowAnonymous]
        [HttpGet("loadDados")]
        public IActionResult LoadDados()
        {
            try
            {
                return Ok(_contributeService.LoadDadosContribute());
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Error in loading lists", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpGet("sentences/{languageId}")]
        public IActionResult GetSentencesByLanguageId(int languageId)
        {
            try
            {
                return Ok(_contributeService.GetSentencesByLanguageId(languageId));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in loading sentences with LanguageId: {languageId}", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpGet("translations/{language1Id}/{language2Id}/{projectId}")]
        public IActionResult GetSentencesByLanguageId(int language1Id, int language2Id, int projectId)
        {
            try
            {
                return Ok(_contributeService.GetSentencesByLanguageIdWithLastTranslationToLanguageId(language1Id, language2Id, projectId));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in loading translations from LanguageId: {language1Id} to LanguageId: {language2Id} in projectId: {projectId}", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpGet("translations/{language1Id}/{projectId}")]
        public IActionResult GetTranslationsFromLanguage(int language1Id, int projectId)
        {
            try
            {
                return Ok(_contributeService.GetTranslationsFromLanguage(language1Id, projectId));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in loading translations from LanguageId: {language1Id} and ProjectId: {projectId}", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpGet("translationstoexport/{language1Id}/{language2Id}/{projectId}")]
        public IActionResult GetTranslationsFromLanguage1ToLanguage2(int language1Id, int language2Id, int projectId)
        {
            try
            {
                return Ok(_contributeService.GetTranslationsFromLanguage1ToLanguage2(language1Id, language2Id, projectId));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in loading translations from LanguageId: {language1Id} to LanguageId {language2Id} and ProjectId: {projectId}", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpGet("userprojects/{userId}")]
        public IActionResult GetUserProjects(int userId)
        {
            try
            {
                return Ok(_contributeService.GetUserProjectsByUserId(userId));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in loading UserProjects by UserId: {userId}", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpPost("translation")]
        public IActionResult AddTranslation([FromBody] TranslationDTO translation)
        {
            try
            {
                return Ok(_contributeService.AddTranslation(translation));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in adding a new translation", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpPut("translation")]
        public IActionResult UpdateTranslation([FromBody] TranslationDTO translation)
        {
            try
            {
                return Ok(_contributeService.UpdateTranslation(translation));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in updating a translation", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpDelete("translation/{translationId}/{sentenceId}")]
        public IActionResult DeleteTranslation(int translationId, int sentenceId)
        {
            try
            {
                return Ok(_contributeService.DeleteTranslation(translationId, sentenceId));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in deleting a translation with Id {translationId}", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpPost("proficiencyLanguage")]
        public IActionResult AddProficiencyLanguage([FromBody] ProficiencyLanguageDTO proficiencyLanguage)
        {
            try
            {
                return Ok(_contributeService.AddProficiencyLanguage(proficiencyLanguage));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in adding a new ProficiencyLanguage", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpPost("translationlike")]
        public IActionResult AddTranslationLike([FromBody] TranslationLikeDTO translationLike)
        {
            try
            {
                var result = _contributeService.AddTranslationLike(translationLike);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in adding a new translation like", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpPut("translationlike")]
        public IActionResult UpdateTranslationLike([FromBody] TranslationLikeDTO translationLike)
        {
            try
            {
                return Ok(_contributeService.UpdateTranslationLike(translationLike));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in updating a translation like", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpPost("sentences")]
        public IActionResult AddSentences([FromBody] IEnumerable<SentenceDTO> sentences)
        {
            try
            {
                return Ok(_contributeService.AddSentences(sentences));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in adding a set of senteces", ex = ex });
            }
        }

        [AllowAnonymous]
        [HttpPost("projectuser")]
        public IActionResult InsertProjectUser([FromBody] ProjectUserViewModel projectUser)
        {
            try
            {
                return Ok(_contributeService.InsertProjectUser(projectUser));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"Error in adding a project user", ex = ex });
            }
        }

    }
}
