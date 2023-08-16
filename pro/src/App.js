import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage.js';
import LoginPage from './components/Loginpage.js'; 
import RegisterPage from './components/Registerpage.js'; 
import './components/Homepage.css';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    
  );
}

export default App;
