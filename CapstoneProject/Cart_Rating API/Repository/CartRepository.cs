using Cart_RatingMS.Data;

using Cart_RatingMS.Models;

using Microsoft.EntityFrameworkCore;

namespace Cart_RatingMS.Repository

{

    public class CartRepository

    {

        private readonly DbContextClass _context;

        public CartRepository(DbContextClass context)

        {

            _context = context;

        }

        public async Task<IEnumerable<CartItem>> GetCartItemsAsync(string userId)

        {

            return await _context.CartItems.Where(c => c.UserId == userId).ToListAsync();

        }

        public async Task AddCartItemAsync(CartItem cartItem)

        {

            _context.CartItems.Add(cartItem);

            await _context.SaveChangesAsync();

        }

        public async Task UpdateCartItemAsync(CartItem cartItem)

        {

            _context.CartItems.Update(cartItem);

            await _context.SaveChangesAsync();

        }

        public async Task DeleteCartItemAsync(int id)

        {

            var cartItem = await _context.CartItems.FindAsync(id);

            if (cartItem != null)

            {

                _context.CartItems.Remove(cartItem);

                await _context.SaveChangesAsync();

            }

        }

    }

}