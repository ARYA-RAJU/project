import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserDash = () => {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getApiData = async () => {
    try {
      const response = await fetch("https://localhost:7130/api/Product");
      const data = await response.json();
      console.log('API Response:', data); 
      setProductData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  console.log("Product Data:", productData);
  const handleEdit = async (ProductId, updatedData) => {
    console.log("Editing product:", ProductId);
    try {
      const response = await fetch(
        `https://localhost:7130/api/Product/${ProductId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
      const editedData = await response.json();
      const updatedProductData = productData.map((product) =>
        product.ProductID === ProductId ? editedData : product
      );
      setProductData(updatedProductData);
    } catch (error) {
      console.error("Error editing product data:", error);
    }
  };

  const handleAddToCart = (product) => {
    // Add the selected product to the cart state
    setCart([...cart, product]);

    // Calculate and update the total price
    setTotalPrice(totalPrice + product.productPrice);
  };

  return (
    <div className="user-dash">
      {/* Navigation bar with a link to the cart */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
        </ul>
      </nav>

      {/* Product listing */}
      <div className="product-list">
        {productData.map((item) => (
          <div className="product-card" key={item.productId}>
            {/* Product details */}
            <h3>{item.productName}</h3>
            <p>{item.productDescription}</p>
            <p>Price: ${item.productPrice}</p>
            <div className="buttons">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDash;
