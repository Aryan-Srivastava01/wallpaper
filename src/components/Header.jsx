import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="left-section">
          <img src={logo} alt="logo" className="logo" />
          
        </div>

        <h2 className="text">Wall Piece</h2>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#">Contact</a>
          <a href="#">About Us</a>
        </nav>

        {/* Hamburger and Close Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? (
            <span className="close-icon">&#10005;</span> // Close icon (X)
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
