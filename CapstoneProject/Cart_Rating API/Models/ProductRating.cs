﻿namespace Cart_RatingMS.Models

{

    public class ProductRating

    {

        public int Id { get; set; }

        public int ProductId { get; set; }

        public string UserId { get; set; }

        public int Rating { get; set; }

    }

}