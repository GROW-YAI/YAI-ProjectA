import React from "react";
import "./styles/hero.css";

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="intro-text">
                {/* <p style={{color: "#d3940b"}}>farm with Attrams</p> */}
                <h1>Sustainable Agriculture with Organic Fertilizer</h1>
                <hr />
                <p>Growing Greener with Organic Fertilizers for a Healthier Planet</p>
                <button style={{
                    width: '150px',    
                    height: '50px',    
                    fontSize: '16px',  
                    padding: '10px 20px', 
                    backgroundColor: '#d3940b', 
                    color: 'black',     
                    border: 'none',  
                    borderRadius: '30px', 
                    cursor: 'pointer'  
                }}>Learn more</button>
            </div>
        </section>
    );
};

export default Hero;