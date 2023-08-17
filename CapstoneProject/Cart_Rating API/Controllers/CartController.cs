using Cart_RatingMS.Models;

using Cart_RatingMS.Repository;

using Microsoft.AspNetCore.Mvc;

[ApiController]

[Route("api/[controller]")]

public class CartController : ControllerBase

{

    private readonly CartRepository _cartRepository;

    public CartController(CartRepository cartRepository)

    {

        _cartRepository = cartRepository;

    }

    [HttpGet("{userId}")]

    public async Task<ActionResult<IEnumerable<CartItem>>> GetCartItems(string userId)

    {

        var cartItems = await _cartRepository.GetCartItemsAsync(userId);

        return Ok(cartItems);

    }

    [HttpPost]

    public async Task<ActionResult> AddCartItem(CartItem cartItem)

    {

        await _cartRepository.AddCartItemAsync(cartItem);

        return CreatedAtAction(nameof(GetCartItems), new { userId = cartItem.UserId }, cartItem);

    }

    [HttpPut("{id}")]

    public async Task<IActionResult> UpdateCartItem(int id, CartItem cartItem)

    {

        if (id != cartItem.Id)

        {

            return BadRequest();

        }

        await _cartRepository.UpdateCartItemAsync(cartItem);

        return NoContent();

    }

    [HttpDelete("{id}")]

    public async Task<IActionResult> DeleteCartItem(int id)

    {

        await _cartRepository.DeleteCartItemAsync(id);

        return NoContent();

    }

}