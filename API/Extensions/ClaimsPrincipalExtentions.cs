using System.Security.Claims;

namespace API.Extensions
{
    public static class ClaimsPrincipalExtentions
    {
        public static string RetriveEmailFromPrincipal(this ClaimsPrincipal user)
        {
            /*user?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;*/
            return user.FindFirstValue(ClaimTypes.Email);
        }
    }
}
