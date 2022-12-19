using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using PC4MT.BLL.DTO;
using PC4MT.BLL.DTO.Language;
using PC4MT.BLL.DTO.Project;
using PC4MT.BLL.DTO.User;
using PC4MT.BLL.Helpers;
using PC4MT.BLL.Services.Interfaces;
using PC4MT.DAL.Data.Models;
using PC4MT.DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PC4MT.BLL.Services
{
    public class UserService : IUserService
    {
        private readonly ILanguageRepository _languageRepository;
        private readonly IProjectRepository _projectRepository;
        private readonly ITranslationRepository _translationRepository;
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly UserManager<User> _userManager;
        private readonly IConfiguration _configuration;
        private readonly IMailService _mailservice;

        public UserService(
            ILanguageRepository languageRepository,
            IProjectRepository projectRepository,
            ITranslationRepository translationRepository,
            IUserRepository userRepository,
            IPasswordHasher<User> passwordHasher,
            UserManager<User> userManager,
            IConfiguration configuration,
            IMailService mailservice)
        {
            _languageRepository = languageRepository;
            _projectRepository = projectRepository;
            _translationRepository = translationRepository;
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
            _userManager = userManager;
            _configuration = configuration;
            _mailservice = mailservice;
        }

        bool IUserService.ChangePassword(PasswordDTO passworDTO)
        {
            try
            {
                User user = _userRepository.GetUserByEmail(passworDTO.Email);

                if (_passwordHasher.VerifyHashedPassword(user, user.PasswordHash, passworDTO.OldPassword) == PasswordVerificationResult.Success)
                {
                    user.PasswordHash = _passwordHasher.HashPassword(user, passworDTO.NewPassword);
                    _userRepository.UpdateUser(user, new List<ApplicationUserRole>());
                    return true;
                }

                return false;
            }
            catch (Exception) { throw; }
        }

        public async Task<MessagingHelper<TokenAuthDTO>> Authenticate(UserAuthDTO userAuthDTO)
        {
            var result = new MessagingHelper<TokenAuthDTO>
            {
                Success = false
            };
            var user = _userRepository.GetUserByEmail(userAuthDTO.Email);

            if (user == null)
            {
                result.AddError("Email does not exists");
                return result;
            }

            if (user.PasswordHash == null)
            {
                result.AddError("Password not defined!");
                return result;
            }
            if (!(_passwordHasher.VerifyHashedPassword(user, user.PasswordHash, userAuthDTO.Password) == PasswordVerificationResult.Success))
            {
                result.AddError("Password incorrect!");
                return result;
            }

            var tokenAuth = await GetJwtSecurityToken(user);

            user.LastLogin = DateTime.Now;
            _userRepository.UpdateUser(user, new List<ApplicationUserRole>());

            var auth = new TokenAuthDTO
            {
                Id = user.Id,
                Email = user.Email,
                Token = new JwtSecurityTokenHandler().WriteToken(tokenAuth),
                Expiration = tokenAuth.ValidTo,
                RoleId = user.UserRoles?.Select(x => x.RoleId).FirstOrDefault()
            };
            result.Obj = auth;
            result.Success = true;
            return result;
        }

        MessagingHelper<UserRegisterDTO> IUserService.RegisterUser(UserRegisterDTO userRegisterDTO)
        {
            MessagingHelper<UserRegisterDTO> result = new MessagingHelper<UserRegisterDTO>();
            result.Success = false;

            var _now = DateTime.Now;

            User user = new User()
            {
                Email = userRegisterDTO.Email,
                Name = userRegisterDTO.Name,
                UserProjects = userRegisterDTO.UserProjects
                    .Select(x => new ProjectUser()
                    {
                        ProjectId = x.ProjectId.HasValue ? x.ProjectId.Value : -1,
                        IsprojectOwner = x.IsProjectOwner,
                        IsAutorized = x.IsAutorized,
                        Project = (x.ProjectId.HasValue || x.Project == null) ? null : new Project()
                        {
                            Name = x.Project.Name,
                            Description = x.Project.Descr,
                            Active = true,
                            Language1Id = x.Project.Language1Id,
                            Language2Id = x.Project.Language2Id,
                            DateCreation = _now,
                            DateChange = _now,
                        }
                    }).ToList(),
                ProficiencyUsers = userRegisterDTO.ProficiencyLanguages
                    .Select(x => new ProficiencyUser()
                    {
                        LanguageId = x.LanguageId,
                        LevelProficiency = x.LevelProficiency
                    }).ToList(),
                UserRoles = new List<ApplicationUserRole>() { new ApplicationUserRole()
                {
                    RoleId = 4 // REGULAR ROLE DEFAULT
                }}
            };

            // check if user already exists
            var userExists = _userRepository.GetUserByEmail(userRegisterDTO.Email);
            if (userExists != null)
            {
                result.AddError("Email already exists");
                return result;
            }

            string password = Guid.NewGuid().ToString();
            var res = _userRepository.CreateUserAsync(user, password);

            if (res != null)
            {
                result.Success = true;

                string bodyEmail =
                    "<style>p.m-0 { margin: 0; }</style>" +
                    "<p>Hey @Name!<p>".Replace("@Name", user.Name) +
                    "<p>Welcome to Gloss Loader. We are happy to have you join our community.<p>" +
                    $"<p class=\"m-0\"> Your access data:</p>" +
                    $"<p class=\"m-0\"><b>Email:</b> @Email</p>".Replace("@Email", user.Email) +
                    $"<p class=\"m-0\"><b>Password:</b> @Password</p>".Replace("@Password", password) +
                    "<p></p>" +
                    $"<p class=\"m-0\">Yours Gloss Loader,</p>" +
                    $"<p class=\"m-0\"><b></b></p>";




                List<string> emailsTo = new List<string> { user.Email };
                _mailservice.SendEmail("Gloss Loader: Registration Successful", null, emailsTo, bodyEmail);
                return result;
            }
            else
            {
                result.AddError("Error creating account");
            }

            return result;
        }

        UserDTO IUserService.UpdateUserProfile(UserDTO userProfile)
        {
            try
            {
                User user = _userRepository.GetUserByEmail(userProfile.Email);

                user.Name = userProfile.Name;

                if (userProfile.ProficiencyLanguages != null && userProfile.ProficiencyLanguages.Count() > 0)
                {
                    foreach (var proficiencyLanguage in userProfile.ProficiencyLanguages)
                    {
                        var userProficiencyLanguage = user.ProficiencyUsers.Where(x => x.LanguageId == proficiencyLanguage.LanguageId).FirstOrDefault();

                        if (userProficiencyLanguage != null)
                        {
                            userProficiencyLanguage.LevelProficiency = proficiencyLanguage.LevelProficiency;
                        }
                        else
                        {
                            user.ProficiencyUsers.Add(new ProficiencyUser()
                            {
                                UserId = user.Id,
                                LanguageId = proficiencyLanguage.LanguageId,
                                LevelProficiency = proficiencyLanguage.LevelProficiency
                            });
                        }
                    }
                }

                user.ProficiencyUsers = user.ProficiencyUsers.Where(x => userProfile.ProficiencyLanguages.Any(y => y.LanguageId == x.LanguageId)).ToList();

                _userRepository.UpdateUser(user, new List<ApplicationUserRole>());

                return new UserDTO()
                {
                    Id = user.Id,
                    Name = user.Name,
                    Email = user.Email,
                    ProficiencyLanguages = user.ProficiencyUsers != null && user.ProficiencyUsers.Count() > 0 ?
                        user.ProficiencyUsers.Select(x => new ProficiencyLanguageDTO()
                        {
                            UserId = x.UserId,
                            LanguageId = x.LanguageId,
                            LevelProficiency = x.LevelProficiency
                        }).ToList() : new List<ProficiencyLanguageDTO>(),
                    UserProjects = user.UserProjects != null && user.UserProjects.Count() > 0 ?
                        user.UserProjects.Select(x => new UserProjectDTO()
                        {
                            UserId = x.UserId,
                            ProjectId = x.ProjectId,
                            IsAutorized = x.IsAutorized,
                            IsProjectOwner = x.IsprojectOwner
                        }).ToList() : new List<UserProjectDTO>(),
                };
            }
            catch (Exception) { throw; }
        }

        private async Task<SecurityToken> GetJwtSecurityToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration.GetValue<string>("AppSettings:Key"));
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, user.Email.ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(720),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return token;
        }

        public UserDTO GetUserByEmail(string email)
        {
            try
            {
                User user = _userRepository.GetUserByEmail(email);

                if (user != null)
                {
                    return new UserDTO()
                    {
                        Id = user.Id,
                        Name = user.Name,
                        Email = user.Email,
                        ProficiencyLanguages = user.ProficiencyUsers != null && user.ProficiencyUsers.Count() > 0 ?
                        user.ProficiencyUsers.Select(x => new ProficiencyLanguageDTO()
                        {
                            UserId = x.UserId,
                            LanguageId = x.LanguageId,
                            LevelProficiency = x.LevelProficiency
                        }).ToList() : new List<ProficiencyLanguageDTO>(),
                        UserProjects = user.UserProjects != null && user.UserProjects.Count() > 0 ?
                        user.UserProjects.Select(x => new UserProjectDTO()
                        {
                            UserId = x.UserId,
                            ProjectId = x.ProjectId,
                            IsAutorized = x.IsAutorized,
                            IsProjectOwner = x.IsprojectOwner
                        }).ToList() : new List<UserProjectDTO>(),
                    };
                }

                return null;
            }
            catch (Exception) { throw; }
        }

        public UserListsDTO GetUserLists(string lang)
        {
            try
            {
                return new UserListsDTO()
                {
                    Languages = _languageRepository.GetLanguages()
                    .Select(x => new LanguageDTO()
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Abbreviation = x.Abbreviation,
                        TypeLanguage = x.Type
                    }).ToList(),
                    Projects = _projectRepository.GetProjects()
                    .Where(x => x.Active.HasValue && x.Active.Value)
                    .Select(x => new ProjectDTO()
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Descr = x.Description,
                        Language1Id = x.Language1Id,
                        Language2Id = x.Language2Id
                    }).ToList()
                };
            }
            catch (Exception) { throw; }
        }

        bool IUserService.ExistsSomeSentenceByUserIdAndLanguageId(int userId, int languageId)
        {
            try
            {
                return _translationRepository.ExistsSomeSentenceByUserIdAndLanguageId(userId, languageId);
            }
            catch (Exception) { throw; }
        }

        bool IUserService.SendCodeToResetPassword(ResetPasswordDTO resetPassword)
        {
            try
            {
                User user = _userRepository.GetUserByEmail(resetPassword.Email);

                if (user != null)
                {
                    var code = user.Id.ToString() + "-" + Guid.NewGuid().ToString();
                    user.UserName = code;
                    var userUptated = this._userRepository.UpdateUser(user, new List<ApplicationUserRole>());
                    if (userUptated != null)
                    {
                        string bodyEmail =
                            "<style>p.m-0 { margin: 0; }</style>" +
                            "<p>Hey @Name,<p>".Replace("@Name", user.Name) +
                            "<p>You recently requested to reset your passord for your Gloss Loader account. Use the follow code:<p>" +
                            $"<p class=\"m-0\"><b>@Code</b></p>".Replace("@Code", user.UserName) +
                            "<p></p>" +
                            $"<p class=\"m-0\">If you did not request a password reset, please ignore this email.</p>" +
                            "<p></p>" +
                            $"<p class=\"m-0\">Yours,</p>" +
                            $"<p class=\"m-0\"><b>Gloss Loader Service</b></p>";

                        List<string> emailsTo = new List<string> { user.Email };
                        _mailservice.SendEmail("Gloss Loader: Password Reset Code", null, emailsTo, bodyEmail);
                        return true;
                    }
                }
                return false;
            }
            catch (Exception) { throw; }
        }

        bool IUserService.CheckCodeToResetPassword(ResetPasswordDTO resetPassword)
        {
            try
            {
                User user = _userRepository.GetUserByEmail(resetPassword.Email);

                if (user != null && user.UserName == resetPassword.Code && resetPassword.Code.StartsWith(user.Id.ToString()))
                {
                    return true;
                }

                return false;
            }
            catch (Exception) { throw; }
        }

        bool IUserService.ResetPassword(ResetPasswordDTO resetPassword)
        {
            try
            {
                User user = _userRepository.GetUserByEmail(resetPassword.Email);

                if (user != null && user.UserName == resetPassword.Code && resetPassword.Code.StartsWith(user.Id.ToString()))
                {
                    user.PasswordHash = _passwordHasher.HashPassword(user, resetPassword.NewPassword);
                    _userRepository.UpdateUser(user, new List<ApplicationUserRole>());
                    return true;
                }

                return false;
            }
            catch (Exception) { throw; }
        }
    }
}
