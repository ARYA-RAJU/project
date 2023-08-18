import React from 'react';
import { Link } from 'react-router-dom';
import './Menpage.css';
import product_image1 from './images/product_image1.jpg';
import men_image1 from './images/men_image1.jpg';
import men_image6 from './images/men_image6.jpg';
import men_image3 from './images/men_image3.jpg';
import men_image4 from './images/men_image4.jpg';
import men_image5 from './images/men_image5.jpg';
import men_image7 from './images/men_image7.jpg';
import men_image8 from './images/men_image8.jpg';
import men_image9 from './images/men_image9.jpg';
import men_image11 from './images/men_image11.jpg';
const MenPage = () => {
  return (
    <div className="men-page">
      <header className="men-header">
        <nav className="men-nav">
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
      <main className="men-main">
        {/* Display men's clothing and products */}
        <div className="product-card">
          <img src={product_image1} alt="Product 1" />
          <h3>Product Title 1</h3>
          <p>Price: $15.25</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={men_image1} alt="Product 2" />
          <h3>Product Title 1</h3>
          <p>Price: $20.50</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={men_image6} alt="Product 3" />
          <h3>Product Title 1</h3>
          <p>Price: $15.25</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={men_image3} alt="Product 4" />
          <h3>Product Title 1</h3>
          <p>Price: $15.25</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={men_image4} alt="Product 5" />
          <h3>Product Title 1</h3>
          <p>Price: $15.25</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={men_image5} alt="Product 6" />
          <h3>Product Title 1</h3>
          <p>Price: $15.25</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={men_image7} alt="Product 7" />
          <h3>Product Title 1</h3>
          <p>Price: $15.25</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={men_image8} alt="Product 8" />
          <h3>Product Title 1</h3>
          <p>Price: $15.25</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={men_image9} alt="Product 9" />
          <h3>Product Title 1</h3>
          <p>Price: $15.25</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={men_image11} alt="Product 10" />
          <h3>Product Title 1</h3>
          <p>Price: $15.25</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div>
          <Link to="/men2">Next page</Link>
        </div>
        
        {/* Add more product cards */}
      </main>
      <footer className="men-footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MenPage;
