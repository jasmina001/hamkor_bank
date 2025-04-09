// src/components/Navbar.js

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Hamkor Bank
        </a>
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="/for-investors/facts" className="navbar-link">Существенные факты</a>
          </li>
          <li className="navbar-item">
            <a href="/for-investors/reports" className="navbar-link">Отчеты</a>
          </li>
      
          <li className="navbar-item">
            <a href="/for-investors/repo" className="navbar-link">Перекупленные акции</a>
          </li>
          <li className="navbar-item">
            <a href="/for-investors/buy" className="navbar-link buy-link">
       
            </a>
          </li>
          <li className="navbar-item">
            <a href="/for-investors/sell" className="navbar-link sell-link">
              <span className="currency">$</span> Продать
              <span>13 800</span>
            </a>
          </li>
          <li className="navbar-item">
            <a href="/for-investors/internet-bank" className="navbar-link">Интернет-банк</a>
          </li>
        </ul>
        {/* Hamburger Icon */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
