import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage.js';
import LoginPage from './components/Loginpage.js'; 
import RegisterPage from './components/Registerpage.js'; 
import ProductPage from './components/Productpage.js';
import MenPage from './components/Menpage.js';
import MenPage2 from './components/Menpage2.js';
import WomenPage from './components/Womenpage.js';
import WomenPage2 from './components/WomenPage2.js';
import KidsPage from './components/Kidspage.js';
import './components/Homepage.css';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/Men" element={<MenPage />} />
        <Route path="/Women" element={<WomenPage />} />
        <Route path="/Kids" element={<KidsPage />} />
        <Route path="/Men2" element={<MenPage2 />} />
        <Route path="/Women2" element={<WomenPage2 />} />
      </Routes>
    
  );
}

export default App;
