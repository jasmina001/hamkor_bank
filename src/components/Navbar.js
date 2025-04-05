// src/components/Navbar.js

import React from 'react';
import './Navbar.css'; // CSS faylini alohida qo'shamiz

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Hamkor Bank
        </a>
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Главная</a>
          </li>
          <li className="navbar-item">
            <a href="/for-investors/reports" className="navbar-link">Отчеты</a>
          </li>
          <li className="navbar-item">
            <a href="/for-investors/about" className="navbar-link">О компании</a>
          </li>
          <li className="navbar-item">
            <a href="/for-investors/contact" className="navbar-link">Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
