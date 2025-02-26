import React from "react";
import "./styles/choose.css"

const Choose = () => {
    return (
        <section className="section-2">
            <h1 style={{fontSize: "40px", fontWeight: "bold"}}>Why Choose Us</h1>
            
            <div className="choose-sub"> 
            <div> {/* 1 */}
                <img src="/100-percent (1).png" alt="" style={{width: "100px", height: "auto"}} />
                <p className="choose-text">Eco-friendly</p>
            </div>

            <div>  {/* 2 */}
            <img src="/pest-control.png" alt="" style={{width: "100px", height: "auto"}} />
            <p className="choose-text">Dual-purpose</p>
            </div>

            <div> {/* 3 */}
            <img src="/nutrient.png" alt="" style={{width: "100px", height: "auto"}} />
            <p className="choose-text">Nutrient-rich</p>
            </div>

            <div>{/* 4 */}
            <img src="/yield.png" alt="" style={{width: "100px", height: "auto"}} />
            <p className="choose-text">Increase Yield</p>
            </div>

            <div> {/* 5 */}
            <img src="/eco.png" alt="" style={{width: "100px", height: "auto"}} />
            <p className="choose-text">Cost Effective</p>
            </div>

            </div>
        </section>
    );
}

export default Choose;