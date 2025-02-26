import React from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Choose from "./components/choose.jsx";
import AboutProduct from "./components/about-product.jsx";
import Products from "./components/our-products.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Choose />
      <AboutProduct />
      <Products />
    </div>
  );
};

export default App;