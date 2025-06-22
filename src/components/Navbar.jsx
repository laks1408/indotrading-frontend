import React from 'react';
import '../styles/Navbar.css';
import logoImage from '../assets/indotradinglogo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImage} alt="Indotrading Logo" />
      </div>
      <input type="text" placeholder="Search for items" className="navbar-search" />
      <button className="navbar-search-btn">Search</button>
      <div className="navbar-links">
        <a href="#">Login</a>
        <a href="#">Cart</a>
        <a href="#">Help</a>
      </div>
    </nav>
  );
}

export default Navbar;
