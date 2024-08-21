// src/Header.js
import React from 'react';
import '../css/Header.css';
import logo from '../images/logo.png'; // Ensure the path is correct

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#websites">Websites</a></li>
          <li><a href="#industries-ideas">Industries & Ideas</a></li>
          <li><a href="#about-us">About Us</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up Now</button>
      </div>
    </header>
  );
}

export default Header;
