using PC4MT.BLL.DTO;
using PC4MT.BLL.DTO.User;
using PC4MT.BLL.Helpers;
using System.Threading.Tasks;

namespace PC4MT.BLL.Services.Interfaces
{
    public interface IUserService
    {
        Task<MessagingHelper<TokenAuthDTO>> Authenticate(UserAuthDTO userAuthDTO);

        bool ChangePassword(PasswordDTO passworDTO);

        MessagingHelper<UserRegisterDTO> RegisterUser(UserRegisterDTO userRegisterDTO);

        UserDTO UpdateUserProfile(UserDTO userProfile);

        UserDTO GetUserByEmail(string email);

        UserListsDTO GetUserLists(string lang);

        bool ExistsSomeSentenceByUserIdAndLanguageId(int userId, int languageId);

        bool SendCodeToResetPassword(ResetPasswordDTO resetPassword);

        bool CheckCodeToResetPassword(ResetPasswordDTO resetPassword);

        bool ResetPassword(ResetPasswordDTO resetPassword);
    }
}
