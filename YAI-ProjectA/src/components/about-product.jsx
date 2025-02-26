import React from "react";
import "./styles/about-product.css"

const AboutProduct = () => {
    return (
     <section className="section-3">
   <div id="product-info" className="about-product">
   <div className="product-about-text">
    <p style={{ fontWeight: "bold", fontSize: "18px", paddingLeft: "4px"}}>Who We Are</p>
    <h2 style={{fontWeight: "200", fontSize: "40px", width: "90%"}}>Caring For Your Plant’s Needs, Our Expertise</h2>
    <p style={{fontSize: "16px", opacity: "0.8", width: "90%"}}>ASAASEPA is a dual purpose organic fertilizer Harnessing the potential of organic waste to address the excessive use of inorganic fertilizers among farmers in the capacity of a fertilizer and a pesticide.</p>
    <button style={{display: "in-line-block",  width: "150px", height: "50px", borderRadius: "30px", backgroundColor: "#559409", border: "none", color: "white", fontSize: "16px"}}>Visit Our Store</button>
    </div>

    <div style={{width: "50%"}}>
      <img src="/Component 3.png" alt=""  style={{width: "600px", height: "auto"}}/></div>
   </div>
     </section>   
    );
}

export default AboutProduct;