import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admindash.css';

const AdminDash = () => {
  const [productData, setProductData] = useState([]);

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
  console.log('Product Data:', productData);
  const handleEdit = async (ProductId, updatedData) => {
    console.log('Editing product:', ProductId);
    try {
      const response = await fetch(`https://localhost:7130/api/Product/${ProductId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      const editedData = await response.json();
      const updatedProductData = productData.map((product) =>
        product.ProductID === ProductId ? editedData : product
      );
      setProductData(updatedProductData);
    } catch (error) {
      console.error('Error editing product data:', error);
    }
  };

  const handleDelete = async (ProductId) => {
    console.log('Deleting product:', ProductId);
    try {
      const response = await fetch(`https://localhost:7130/api/Product/${ProductId}`, {
        method: 'DELETE',
      });
      if(response.ok){
        getApiData();
      }
    } catch (error) {
      console.error('Error deleting product data:', error);
    }
  };

  return (
    <div className="full-dash">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="admin-dash">
        <div className="product-list">
          {productData.map((item) => (
            <div className="product-card" key={item.productID}>
              <h3>{item.productName}</h3>
              <h6>{item.productID}</h6>
              <div className="product-image">
                <img src={item.productImage} alt={item.productName} />
              </div>
              <div className="product-details">
                <p>{item.productDescription}</p>
                <p>Price: ${item.productPrice}</p>
                <p>Stock: {item.productStock}</p>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleEdit(item.productId, item)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.productId)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <Link to="/Addproductform" className="add-product-button">
            <h1 style={{ color: 'black' }}>Add Product ➕</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
