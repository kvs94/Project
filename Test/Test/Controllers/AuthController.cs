using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Linq;


namespace Test.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : Controller
    {
        private ApplicationContext db;
        public AuthController(ApplicationContext context)
        {
            db = context;
            if (!db.User.Any())
            {
                db.User.Add(new User { Id = 1, LogonName = "test", Password = "test", Role = "user" });
                db.SaveChanges();
            }
        }
        // GET api/values
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]User user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            var userEntity = db.User.Where(u => user.LogonName == u.LogonName).FirstOrDefault();
            if (userEntity != null && user.Password == userEntity.Password)
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokeOptions = new JwtSecurityToken(
                    issuer: "MyAuthServer",
                    audience: "http://localhost:51884/",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}
