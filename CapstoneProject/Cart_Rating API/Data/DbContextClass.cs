using Cart_RatingMS.Models;

using Microsoft.EntityFrameworkCore;

namespace Cart_RatingMS.Data

{

    public class DbContextClass : DbContext

    {

        public DbContextClass(DbContextOptions<DbContextClass> options) : base(options)

        {

        }

        public DbSet<CartItem> CartItems { get; set; }

        public DbSet<ProductRating> ProductRatings { get; set; }

    }

}