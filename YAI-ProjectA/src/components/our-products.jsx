import React from "react";
import "./styles/our-products.css";

const Products = () => {
    // Array of product data
    const products = [
        { id: 1, name: "Dry banana peels", image: "/fert-nbg2.png" },
        { id: 2, name: "Dry mango peels", image: "/fert-nbg2.png" },
        { id: 3, name: "Dry pineapple peels", image: "/fert-nbg2.png" },
        { id: 4, name: "Dry orange peels", image: "/fert-nbg2.png" },
    ];

    return (
        <section id="products" className="section-4">
            <div>
                <h1 style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}>
                    Products in Our Catalogue
                </h1>

                <div className="products">
                    {/* Loop through the products array */}
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="product"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-between",
                                minHeight: "350px",
                            }}
                        >
                            <div style={{ alignSelf: "flex-end", padding: "10px" }}>
                                {/* <button
                                    style={{
                                        backgroundColor: "#9CBF1C",
                                        padding: "5px 10px",
                                        borderRadius: "10px",
                                        color: "white",
                                        border: "none",
                                    }}
                                >
                                    Shop
                                </button> */}
                            </div>
                            <div>
                                <img src={product.image} alt="" style={{ width: "250px" }} />
                            </div>
                            <p className="p-text">{product.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <section className="product-sub">
                <div className="content">
                    <h1 style={{ width: "40%", paddingTop: "20px", fontSize: "40px" }}>
                        Visit our store to find more in our catalogue
                    </h1>
                    <button
                        style={{
                            width: "150px",
                            height: "50px",
                            borderRadius: "30px",
                            backgroundColor: "#559409",
                            border: "none",
                            color: "white",
                            fontSize: "16px",
                            marginTop: "20px",
                        }}
                    >
                        Visit our Store
                    </button>
                </div>
            </section>
        </section>
    );
};

export default Products;