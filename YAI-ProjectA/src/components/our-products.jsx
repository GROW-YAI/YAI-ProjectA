import React from "react";
import "./styles/our-products.css"

const Products = () => {
    return (
        <section id="products" className="section-4">
            <div>
                <h1 style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}>Products in Our Catalogue</h1>

                <div className="products">

                    {/* 1 */}
                    <div className="product" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: "350px" }}>
                        <div style={{ alignSelf: "flex-end", padding:"10px" }}>
                        <button style={{backgroundColor: "#559409", padding: "5px 10px", borderRadius: "10px", color: "white",  border: "none" }}>Shop</button>
                        </div>
                        <div><img src="/fert-nbg2.png" alt="" style={{ width: "250px" }} /></div>
                        <p className="p-text">Dry banana peels</p>
                    </div>

                    {/* 2 */}
                    <div className="product" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: "350px" }}>
                    <div style={{ alignSelf: "flex-end", padding:"10px" }}>
                    <button style={{backgroundColor: "#559409", padding: "5px 10px", borderRadius: "10px", color: "white", border: "none" }}>Shop</button>
                    </div>
                        <div><img src="/fert-nbg2.png" alt="" style={{ width: "250px" }} /></div>
                        <p className="p-text">Dry mango peels</p>
                    </div>

                    {/* 3 */}
                    <div className="product" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: "350px" }}>
                    <div style={{ alignSelf: "flex-end", padding:"10px" }}>
                    <button style={{backgroundColor: "#559409", padding: "5px 10px", borderRadius: "10px", color: "white",  border: "none" }}>Shop</button>
                    </div>
                        <div><img src="/fert-nbg2.png" alt="" style={{ width: "250px" }} /></div>
                        <p className="p-text">Dry pineapple peels</p>
                    </div>

                    {/* 4 */}
                    <div className="product" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: "350px" }}>
                    <div style={{ alignSelf: "flex-end", padding:"10px" }}>
                    <button style={{backgroundColor: "#559409", padding: "5px 10px", borderRadius: "10px", color: "white",  border: "none" }}>Shop</button>
                    </div>
                        <div><img src="/fert-nbg2.png" alt="" style={{ width: "250px" }} /></div>
                        <p className="p-text">Dry orange peels</p>
                    </div>

                </div>
            </div>

            <section className="product-sub">
                <div className="content">
                    <h1 style={{ width: "40%", paddingTop: "20px", fontSize: "40px" }}>Visit our store to find more in our catalogue</h1>
                    <button style={{ width: "150px", height: "50px", borderRadius: "30px", backgroundColor: "#559409", border: "none", color: "white", fontSize: "16px", marginTop: "20px" }}>Visit our Store</button>
                </div>
            </section>
        </section>

    );
}

export default Products;