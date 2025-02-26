import React from "react";
import "./styles/choose.css"

const Choose = () => {
    return (
        <section className="section-2">
            <h1 style={{fontSize: "40px", fontWeight: "300"}}>Why Choose Us</h1>
            
            <div className="choose-sub"> 
            <div> {/* 1 */}
                <img src="/eco.png" alt="" style={{width: "120px", height: "auto"}} />
                <p>Sustainable</p>
            </div>

            <div>  {/* 2 */}
            <img src="/eco.png" alt="" style={{width: "120px", height: "auto"}} />
            <p>Sustainable</p>
            </div>

            <div> {/* 3 */}
            <img src="/eco.png" alt="" style={{width: "120px", height: "auto"}} />
            <p>Sustainable</p>
            </div>

            <div>{/* 4 */}
            <img src="/eco.png" alt="" style={{width: "120px", height: "auto"}} />
            <p>Sustainable</p>
            </div>

            <div> {/* 5 */}
            <img src="/eco.png" alt="" style={{width: "120px", height: "auto"}} />
            <p>Sustainable</p>
            </div>

            </div>
        </section>
    );
}

export default Choose;