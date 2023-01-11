using System;
using System.Collections.Generic;

namespace PC4MT.BLL.Services.Interfaces
{
    public interface IMailService
    {
        bool SendEmail(String subject, String from, List<String> to, String message);
    }
}
