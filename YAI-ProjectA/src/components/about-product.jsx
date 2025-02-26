import React from "react";
import "./styles/about-product.css"

const AboutProduct = () => {
    return (
     <section className="section-3">
   <div className="about-product">
   <div className="product-about-text">
    <p style={{ fontWeight: "bold", fontSize: "18px", paddingLeft: "4px", color: "#559409"}}>Who We Are</p>
    <h2 style={{fontWeight: "300", fontSize: "40px", width: "80%"}}>Caring For Your Plant’s Needs, Our Expertise</h2>
    <p style={{fontSize: "16px", opacity: "0.8", width: "80%"}}>ASAASEPA is a dual purpose organic fertilizer Harnessing the potential of organic waste to address the excessive use of inorganic fertilizers among farmers in the capacity of a fertilizer and a pesticide.</p>
    </div>

    <div style={{width: "40%"}}>
      <img src="/Component 3.png" alt=""  style={{width: "600px", height: "auto"}}/></div>
   </div>
     </section>   
    );
}

export default AboutProduct;