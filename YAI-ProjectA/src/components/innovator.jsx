import React from "react";
import "./styles/innovator.css";

const Innovator = () => {
    return (
        <section className="innovator-section">
            <div className="innovator-container">
                <div className="innovator-image">
                    <img src='/ino.jpg' alt="Innovator" />
                </div>

                <div className="innovator-content">
                    <h2 style={{ fontWeight: "bold", fontSize: "25px", marginBottom: "16px" }}>
                        Meet The Innovator
                    </h2>
                    <h3 style={{ fontWeight: "200", fontSize: "40px", marginBottom: "12px" }}>
                        Derrick Larbi Attrams
                    </h3>
                    <p style={{ fontSize: "16px", opacity: "0.85", width: "100%" }}>
                        A 22-year-old tertiary student. Growing up, he stayed with his dad, who is a farmer. Through helping him out on farm activities, he got to know the reason why his dad used to spread vegetable waste beneath his crops. That’s a major reason why he started pursuing this innovation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Innovator;