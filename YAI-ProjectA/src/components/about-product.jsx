import React from "react";
import "./styles/about-product.css";

const AboutProduct = () => {
  return (
    <section className="section-3">
      <div className="about-product">
        <div className="product-about-text">
          <p style={{ fontWeight: "bold", fontSize: "20px"}}>Who We Are</p>
          <h2 style={{ fontWeight: "300", fontSize: "40px", width: "100%" }}>Caring For Your Plant’s Needs, Our Expertise</h2>
          <p style={{ fontSize: "16px", opacity: "0.8", width: "100%" }}>
            ASAASEPA is a dual-purpose organic fertilizer harnessing the potential of organic waste to address the excessive use of inorganic fertilizers among farmers in the capacity of a fertilizer and a pesticide.
          </p>
        </div>
        <div className="product-image">
          <img src="/Component 3.png" alt="" style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;