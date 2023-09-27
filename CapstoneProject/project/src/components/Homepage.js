import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const HomePage = () => {
  const images = [
    image1,
    image2,
    image3,
    // Add more image imports
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <nav>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">About Us</Link></li>
          <li><Link to="#">Contact Us</Link></li>
          <li><Link to="/register" className="register-button">Register</Link></li>
          <li><Link to="/login" className="login-button">Login</Link></li>
        </ul>
      </nav>
      
      
      <main className="main" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className="shopnow-container">
        <Link to="/product" className="shopnow-button">
            Shop Now
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
