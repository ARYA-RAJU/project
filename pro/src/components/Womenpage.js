import React from 'react';
import { Link } from 'react-router-dom';
import './Womenpage.css';
import product_image2 from './images/product_image2.jpg';

const WomenPage = () => {
  return (
    <div className="women-page">
      <header className="women-header">
        <nav className="women-nav">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            {/* Add more navigation links */}
          </ul>
          <div className="nav-icons">
            <Link to="/wishlist" className="nav-icon">
              <i className="fas fa-heart"></i>
            </Link>
            <Link to="/cart" className="nav-icon">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </nav>
      </header>
      <main className="women-main">
        {/* Display women's clothing and products */}
        <div className="product-card">
          <img src={product_image2} alt="Product 1" />
          <h3>Product Title 1</h3>
          <p>Price: $XX.XX</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="product-card">
          <img src={product_image2} alt="Product 1" />
          <h3>Product Title 1</h3>
          <p>Price: $XX.XX</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="product-card">
          <img src={product_image2} alt="Product 1" />
          <h3>Product Title 1</h3>
          <p>Price: $XX.XX</p>
          <button className="buy-button">Buy Now</button>
        </div>
        {/* Add more product cards */}
      </main>
      <footer className="women-footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WomenPage;
