using Cart_RatingMS.Data;

using Cart_RatingMS.Models;

using Microsoft.EntityFrameworkCore;

namespace Cart_RatingMS.Repository

{

    public class RatingRepository

    {

        private readonly DbContextClass _context;

        public RatingRepository(DbContextClass context)

        {

            _context = context;

        }

        public async Task<IEnumerable<ProductRating>> GetProductRatingsAsync(int productId)

        {

            return await _context.ProductRatings.Where(r => r.ProductId == productId).ToListAsync();

        }

        public async Task AddProductRatingAsync(ProductRating productRating)

        {

            _context.ProductRatings.Add(productRating);

            await _context.SaveChangesAsync();

        }

    }

}