import React from 'react';
import { Link } from 'react-router-dom';
import './Productpage.css';
import Men from './images/Men.jpeg';
import Women from './images/Women.jpeg';
import Kids from './images/Kids.jpg';
import Beauty from './images/Beauty.jpeg';

const ProductPage = () => {
  return (
    <div className="product-page">
        <header className="product-header">
        <nav className="product-nav">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Contact Us</Link></li>
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
      <div className="shop-by-category">
        <h2>Shop by Category</h2>
        <div className="category-items">
          <div className="category-item">
            <img src = {Men} alt="Men" />
            <Link to="/Men">Men</Link>
          </div>
          <div className="category-item">
            <img src = {Women} alt="Women" />
            <Link to="/Women">Women</Link>
          </div>
          <div className="category-item">
            <img src = {Kids} alt="Kids" />
            <Link to="/Kids">Kids</Link>
          </div>
          <div className="category-item">
            <img src = {Beauty} alt="Beauty" />
            <Link to="/Beauty">Beauty</Link>
          </div>
          
        </div>
      </div>
      <footer className="product-footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductPage;
