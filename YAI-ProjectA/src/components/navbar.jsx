import React, { useState, useEffect } from "react";
import "./styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-shadow" : ""}`}>
      <div className="navbar-content">
        <div className="site-logo">
          <img src="/asaase111.png" alt="Logo 1" className="logo-image" />
        </div>

        <div className="menu-container">
          <ul className="menu-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <img src="/shopping-cart (2).png" alt="Logo 2" className="cart-icon"  style={{ cursor: "pointer" }} // Add pointer cursor for better UX
    onClick={() => window.open("https://paystack.shop/asaasepa-organic-fertilizer", "_blank")} />
        </div>

        <div className="mobile-right">
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div >
          <img  src="/shopping-cart (2).png" alt="Cart" className="cart-icon-mobile"   style={{ cursor: "pointer" }} // Add pointer cursor for better UX
    onClick={() => window.open("https://paystack.shop/asaasepa-organics", "_blank")}  />
        </div>

        {isMenuOpen && (
          <div className="popup-menu">
            <ul>
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#products" onClick={toggleMenu}>Products</a></li>
              <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
