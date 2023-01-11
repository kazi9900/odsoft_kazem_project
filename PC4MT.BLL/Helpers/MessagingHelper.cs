using System;
using System.Collections.Generic;

namespace PC4MT.BLL.Helpers
{
    public class MessagingHelper<T>
    {
        public bool Success { get; set; }

        public string Message { get; set; }

        public Dictionary<string, List<string>> Errors { get; set; }

        public T Obj { get; set; }

        private readonly string errorMessage = "errorMessage";

        public void AddError(string key, string error)
        {
            if (Errors == null)
            {
                Errors = new Dictionary<string, List<string>>();
            }

            if (Errors.ContainsKey(key))
            {
                Errors[key].Add(error);
            }
            else
            {
                Errors.Add(key, new List<string>() { error });
            }
        }

        public void AddError(string error)
        {
            if (Errors == null)
            {
                Errors = new Dictionary<string, List<string>>();
            }

            if (Errors.ContainsKey(errorMessage))
            {
                Errors[errorMessage].Add(error);
            }
            else
            {
                Errors.Add(errorMessage, new List<string>() { error });
            }
        }

        public void AddError(Dictionary<string, string> errors)
        {
            if (Errors == null)
            {
                Errors = new Dictionary<string, List<string>>();
            }

            foreach (var error in errors)
            {
                if (Errors.ContainsKey(error.Key))
                {
                    Errors[error.Key].Add(error.Value);
                }
                else
                {
                    Errors.Add(error.Key, new List<string>() { error.Value });
                }
            }
        }
    }
}
