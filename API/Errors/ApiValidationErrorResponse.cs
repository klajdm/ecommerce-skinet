namespace API.Errors
{
    public class ApiValidationErrorResponse : ApiResponse
    {
        public ApiValidationErrorResponse() : base(40)
        {
        }

        public IEnumerable<string> Errors { get; set; }
    }
}
