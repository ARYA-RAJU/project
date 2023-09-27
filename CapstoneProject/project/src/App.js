import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage.js';
import LoginPage from './components/Loginpage.js';
import RegisterPage from './components/Registerpage.js';
import ProductPage from './components/Productpage.js';
import MenPage from './components/Menpage.js';
import WomenPage from './components/Womenpage.js';
import AdminDash from './components/Admindash.js';
import UserDash from './components/Userdash.js';
import Cart from './components/Cart.js';
import AddProductForm  from './components/Addproductform.js';
import './components/Homepage.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/Men" element={<MenPage />} />
        <Route path="/Women" element={<WomenPage />} />
        <Route path="/Admindash" element={<AdminDash/>} />
        <Route path="/Userdash" element={<UserDash/>} />
        <Route path="/Addproductform" element={<AddProductForm/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
  );
}

export default App;
