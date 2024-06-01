namespace API.Errors
{
    public class ApiException : ApiResponse
    {
        public ApiException(int statusCode, string message = null, string detalis = null) : base(statusCode, message)
        {
            Detalis = detalis;
        }

        public string Detalis {  get; set; }
    }
}
