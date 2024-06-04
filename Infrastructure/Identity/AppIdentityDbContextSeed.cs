
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    { 
    
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
    {
        if (!userManager.Users.Any()) 
            {
                var user = new AppUser
                {
                    DisplayName = "Bob",
                    Email = "bob@test.com",
                    UserName = "bob@test.com",
                    Address = new Address
                    {
                        FirstName = "Bob",
                        LastName = "Bobity",
                        Street = "Pavaresia",
                        City = "Vlore",
                        State = "AL",
                        ZipCode = "9401"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
    }
    }
}
