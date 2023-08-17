namespace UserAPI.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public int Password { get; set; }   
        public string Email { get; set; }
    }
}