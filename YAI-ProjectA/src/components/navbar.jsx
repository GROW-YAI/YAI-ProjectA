import React, { useState } from "react";
import "./styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* <div className="site-logo"> */}
          <img src="/asaase111.png" alt="Logo 1" style={{ width: "200px", height: "auto", paddingTop: "0px", paddingBottom: "0px"}} />
        {/* </div> */}

        <div className="menu-container">
          <ul className="menu-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#product-info">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <img src="/shopping-cart (2).png" alt="Logo 2 " style={{width: "30px"}} />
        </div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {isMenuOpen && (
          <div className="popup-menu">
            <ul>
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#product-info" onClick={toggleMenu}>About</a></li>
              <li><a href="#products" onClick={toggleMenu}>Products</a></li>
              <li><a href="#services" onClick={toggleMenu}>Services</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;