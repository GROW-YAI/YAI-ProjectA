import React, { useState } from "react";
import "./styles/navbar.css"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">

      <div className="site-logo">
        <img src="path-to-your-logo.png" alt="Site Logo" />
      </div>

      {/* Menu Links and Logos2 (for desktop) */}
      <div className="menu-container">
        <ul className="menu-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
        {/* <div className="logos2">
          <img src="path-to-logo1.png" alt="Logo 1" />
          <img src="path-to-logo2.png" alt="Logo 2" />
        </div> */}
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Pop-up Menu (for mobile) */}
      {isMenuOpen && (
        <div className="popup-menu">
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#products" onClick={toggleMenu}>Products</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;