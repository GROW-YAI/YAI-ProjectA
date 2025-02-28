import React from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Choose from "./components/choose.jsx";
import AboutProduct from "./components/about-product.jsx";
import Products from "./components/our-products.jsx";
import Innovator from "./components/innovator.jsx";
import Testimonials from "./components/testimonial.jsx";
import ContactForm from "./components/contact.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Choose />
      <AboutProduct />
      <Products />
      <Testimonials />
      <Innovator />
      <ContactForm />
    </div>
  );
};

export default App;