import React from 'react';
import { Link } from 'react-router-dom';
import './Womenpage.css';
import women2_image1 from'./images/women2_image1.jpg';
import women2_image2 from'./images/women2_image2.jpg';
import women2_image3 from'./images/women2_image3.jpg';
import women2_image4 from'./images/women2_image4.jpg';
import women2_image5 from'./images/women2_image5.jpg';
import women2_image6 from'./images/women2_image6.jpg';
import women2_image7 from'./images/women2_image7.jpg';
import women2_image8 from'./images/women2_image8.jpg';
import women2_image9 from'./images/women2_image9.jpg';
import women2_image10 from'./images/women2_image10.jpg';


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
      <main className="women-main">
        {/* Display women's clothing and products */}
        <div className="product-card">
          <img src={women2_image1} alt="Product 1" />
          <h3>Product Title 1</h3>
          <p>Price: $10.00</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={women2_image2} alt="Product 2" />
          <h3>Product Title 1</h3>
          <p>Price: $12.56</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={women2_image3} alt="Product 3" />
          <h3>Product Title 1</h3>
          <p>Price: $12.56</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={women2_image4} alt="Product 4" />
          <h3>Product Title 1</h3>
          <p>Price: $12.56</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={women2_image5} alt="Product 5" />
          <h3>Product Title 1</h3>
          <p>Price: $12.56</p>
          <button className="buy-button">Add to cart</button>
        </div>
        v
        <div className="product-card">
          <img src={women2_image6} alt="Product 6" />
          <h3>Product Title 1</h3>
          <p>Price: $12.56</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={women2_image7} alt="Product 7" />
          <h3>Product Title 1</h3>
          <p>Price: $12.56</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={women2_image8} alt="Product 8" />
          <h3>Product Title 1</h3>
          <p>Price: $12.56</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={women2_image9} alt="Product 9" />
          <h3>Product Title 1</h3>
          <p>Price: $12.56</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div className="product-card">
          <img src={women2_image10} alt="Product 10" />
          <h3>Product Title 1</h3>
          <p>Price: $12.56</p>
          <button className="buy-button">Add to cart</button>
        </div>
        <div>
          <Link to ="/women">Previous page</Link>
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
