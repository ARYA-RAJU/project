﻿namespace Cart_RatingMS.Models

{

    public class CartItem

    {

        public int Id { get; set; }

        public int ProductId { get; set; }

        public string UserId { get; set; }

        public int Quantity { get; set; }

    }

}