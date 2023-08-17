using Cart_RatingMS.Models;

using Cart_RatingMS.Repository;

using Microsoft.AspNetCore.Mvc;

[ApiController]

[Route("api/[controller]")]

public class RatingController : ControllerBase

{

    private readonly RatingRepository _ratingRepository;

    public RatingController(RatingRepository ratingRepository)

    {

        _ratingRepository = ratingRepository;

    }

    [HttpGet("{productId}")]

    public async Task<ActionResult<IEnumerable<ProductRating>>> GetProductRatings(int productId)

    {

        var ratings = await _ratingRepository.GetProductRatingsAsync(productId);

        return Ok(ratings);

    }

    [HttpPost]

    public async Task<ActionResult> AddProductRating(ProductRating productRating)

    {

        await _ratingRepository.AddProductRatingAsync(productRating);

        return CreatedAtAction(nameof(GetProductRatings), new { productId = productRating.ProductId }, productRating);

    }

}

