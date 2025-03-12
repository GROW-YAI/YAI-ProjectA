import React, { useRef } from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Choose from "./components/choose.jsx";
import AboutProduct from "./components/about-product.jsx";
import Products from "./components/our-products.jsx";
import Innovator from "./components/innovator.jsx";
import Testimonials from "./components/testimonial.jsx";
import ContactUs from "./components/contact.jsx";

const App = () => {
  const heroRef = useRef(null); 

  return (
    <div>
      <Navbar />
      <Hero ref={heroRef} /> 
      <Choose />
      <AboutProduct />
      <Products />
      <Testimonials />
      <Innovator />
      <ContactUs />
    </div>
  );
};

export default App;