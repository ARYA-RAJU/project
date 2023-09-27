import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Addproductform.css';

const AddProductForm = () => {
  const [newProductData, setNewProductData] = useState({
    ProductName: '',
    ProductDescription: '',
    ProductPrice: 0,
    ProductStock: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProductData({
      ...newProductData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://localhost:7130/api/Product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProductData),
      });

      if (!response.ok) {
        throw new Error(`Failed to add product (HTTP ${response.status})`);
      }

      const data = await response.json();
      console.log('New product data added:', data);
      navigate('/AdminDash');
    } catch (error) {
      console.error('Error adding product data:', error);
    }
  };

  return (
    <div className="add-product-page">
      <div className="navbar">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="ProductName">Name</label>
    <input
      type="text"
      id="ProductName"
      name="ProductName"
      value={newProductData.ProductName}
      onChange={handleInputChange}
    />
  </div>
  <div>
    <label htmlFor="ProductDescription">Description</label>
    <textarea
      id="ProductDescription"
      name="ProductDescription"
      value={newProductData.ProductDescription}
      onChange={handleInputChange}
    />
  </div>
  <div>
    <label htmlFor="ProductPrice">Price</label>
    <input
      type="number"
      id="ProductPrice"
      name="ProductPrice"
      value={newProductData.ProductPrice}
      onChange={handleInputChange}
    />
  </div>
  <div>
    <label htmlFor="ProductStock">Stock</label>
    <input
      type="number"
      id="ProductStock"
      name="ProductStock"
      value={newProductData.ProductStock}
      onChange={handleInputChange}
    />
  </div>
  <div>
    <label htmlFor="ProductImage">Image</label>
    <input
      type="url"
      id="ProductImage"
      name="ProductImage"
      value={newProductData.ProductImage}
      onChange={handleInputChange}
    />
  </div>
  <button type="submit">Add Product</button>
</form>
    </div>
</div>
  );
};

export default AddProductForm;
