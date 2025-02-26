import React from "react";
import "./styles/our-products.css"

const Products = () => {
    return (
        <section className="section-4">
            <div>
                <h1 style={{ textAlign: "center", fontSize: "40px", fontWeight: "300" }}>Products in Our Catalogue</h1>

                <div className="products">

                    {/* 1 */}
                    <div className="product" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: "400px" }}>
                        <div style={{ height: "50px", width: "50px", alignSelf: "flex-end" }}> <img src="" alt="" /></div>
                        <div><img src="/fert-nbg2.png" alt="" style={{ width: "250px" }} /></div>
                        <p className="p-text">Product 1</p>
                    </div>

                    {/* 2 */}
                    <div className="product" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: "400px" }}>
                        <div style={{ height: "50px", width: "50px", alignSelf: "flex-end" }}> <img src="" alt="" /></div>
                        <div><img src="/fert-nbg2.png" alt="" style={{ width: "250px" }} /></div>
                        <p className="p-text">Product 1</p>
                    </div>

                    {/* 3 */}
                    <div className="product" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: "400px" }}>
                        <div style={{ height: "50px", width: "50px", alignSelf: "flex-end" }}> <img src="" alt="" /></div>
                        <div><img src="/fert-nbg2.png" alt="" style={{ width: "250px" }} /></div>
                        <p className="p-text">Product 1</p>
                    </div>

                    {/* 4 */}
                    <div className="product" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", minHeight: "400px" }}>
                        <div style={{ height: "50px", width: "50px", alignSelf: "flex-end" }}> <img src="" alt="" /></div>
                        <div><img src="/fert-nbg2.png" alt="" style={{ width: "250px" }} /></div>
                        <p className="p-text">Product 1</p>
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