using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using PC4MT.BLL.DTO;
using System.Threading.Tasks;

namespace PC4MT.Hubs
{
    public class PC4MTHub : Hub
    {
        public Task SendTranslationLikeAdd(TranslationLikeDTO translationLike)
        {
            return Clients.Others.SendAsync("SendTranslationLikeAdd", translationLike);
        }

        public Task SendTranslationLikeUpdate(TranslationLikeDTO translationLike)
        {
            return Clients.Others.SendAsync("SendTranslationLikeUpdate", translationLike);
        }

        public Task SendMessage1(string user, string message)               // Two parameters accepted
        {
            return Clients.Others.SendAsync("ReceiveOne", user, message);    // Note this 'ReceiveOne' 
        }
    }
}
