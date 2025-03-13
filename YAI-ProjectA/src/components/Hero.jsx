import React, { forwardRef } from "react";
import "./styles/hero.css";

const Hero = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="hero">
      <div className="hero-content">
        <div className="intro-text">
          <h1 style={{ fontFamily: "Inter, serif", fontSize: "30px", fontWeight: "200" }}>ASAASEPA</h1>
          <div className="image-container-mobile">
            <img src="/fert-nbg2.png" alt="Organic Fertilizer" />
          </div>
          <h1 style={{ fontSize: "60px" }}> Organic Fertilizer and Pesticide</h1>
          <p style={{ fontFamily: "Inter, serif", fontSize: "20px", fontWeight: "200" }}>Grow More, Worry Less</p>
          <button style={{ display: "in-line-block", width: "150px", height: "50px", borderRadius: "30px", backgroundColor: "#559409", border: "none", color: "white", fontSize: "16px" }}>Learn more</button>
        </div>
        <div className="image-container">
          <img src="/asaasepa-no_bg11.png" alt="Organic Fertilizer" />
        </div>
      </div>
    </section>
  );
});

export default Hero;