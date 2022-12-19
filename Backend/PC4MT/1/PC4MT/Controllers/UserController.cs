using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PC4MT.BLL.DTO;
using PC4MT.BLL.Services.Interfaces;
using System;
using System.Threading.Tasks;

namespace PC4MT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private IUserService _userService;
        private IMailService _mailService;

        public UserController(IUserService userService, IMailService mailService)
        {
            this._userService = userService;
            this._mailService = mailService;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] UserRegisterDTO userRegister)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(userRegister);
            }

            var result = this._userService.RegisterUser(userRegister);

            if (!result.Success)
            {
                return BadRequest(result.Errors);
            }

            return Ok(new { message = "User successfully created" });
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] UserAuthDTO userAuth)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(userAuth);
            }

            var result = await this._userService.Authenticate(userAuth);

            if (!result.Success)
            {
                return Ok(null);
            }

            return Ok(result.Obj);
        }

        [AllowAnonymous]
        [HttpPost("sendcoderesetpassword")]
        public IActionResult SendCodeResetPassword([FromBody] ResetPasswordDTO resetPassword)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(resetPassword);
                }

                return Ok(_userService.SendCodeToResetPassword(resetPassword));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [AllowAnonymous]
        [HttpPost("checkcoderesetpassword")]
        public IActionResult CheckCodeResetPassword([FromBody] ResetPasswordDTO resetPassword)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(resetPassword);
                }

                return Ok(_userService.CheckCodeToResetPassword(resetPassword));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [AllowAnonymous]
        [HttpPost("resetpassword")]
        public IActionResult ResetPassword([FromBody] ResetPasswordDTO resetPassword)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(resetPassword);
                }

                return Ok(_userService.ResetPassword(resetPassword));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut("changePassword")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public IActionResult ChangePassword([FromBody] PasswordDTO passwordDTO)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(passwordDTO);
                }

                return Ok(this._userService.ChangePassword(passwordDTO));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut("profile")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public IActionResult UpdateProfile([FromBody] UserDTO userProfile)
        {
            try
            {
                return Ok(this._userService.UpdateUserProfile(userProfile));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [AllowAnonymous]
        [HttpPost("email/")]
        public async Task<IActionResult> GetUser([FromBody] string email)
        {
            var result = this._userService.GetUserByEmail(email);

            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("userlists/{lang}")]
        public IActionResult GetUserLists(string lang)
        {
            try
            {
                return Ok(_userService.GetUserLists(lang));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [AllowAnonymous]
        [HttpGet("existssomesentence/{userId}/{languageId}")]
        public IActionResult ExistsSomeSentenceByUserIdAndLanguageId(int userId, int languageId)
        {
            try
            {
                return Ok(_userService.ExistsSomeSentenceByUserIdAndLanguageId(userId, languageId));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
