using System;
using System.Collections.Generic;
using System.Text;

namespace PC4MT.BLL.DTO
{
    public class ResetPasswordDTO
    {
        public string Email { get; set; }

        public string Code { get; set; }

        public string NewPassword { get; set; }
    }
}
