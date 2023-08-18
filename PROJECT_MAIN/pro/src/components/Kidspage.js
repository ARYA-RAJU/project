import React from 'react';
import { Link } from 'react-router-dom';
import './Kidspage.css';
import product_image2 from './images/product_image2.jpg';

const KidsPage = () => {
  return (
    <div className="kids-page">
      <header className="kids-header">
        <nav className="kids-nav">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/kids">Kids</Link></li>
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
      <main className="kids-main">
        {/* Display women's clothing and products */}
        <div className="product-card">
          <img src={product_image2} alt="Product 1" />
          <h3>Product Title 1</h3>
          <p>Price: $12.45</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={product_image2} alt="Product 1" />
          <h3>Product Title 1</h3>
          <p>Price: $10.00</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={product_image2} alt="Product 1" />
          <h3>Product Title 1</h3>
          <p>Price: $12.56</p>
          <button className="buy-button">Add to cart</button>
        </div>
        {/* Add more product cards */}
      </main>
      <footer className="kids-footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default KidsPage;
