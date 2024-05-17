import React from "react";

function FeaturedCol({ img, prod_name, fourth, fifth }) {
    const addToCart = () => {
        // Get the cart items from local storage or initialize an empty array if it doesn't exist
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Add the current product to the cart items
        cartItems.push({
            img: img,
            prod_name: prod_name
        });

        // Store the updated cart items back to local storage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    return (
        <div className="col-4">
           
                <img src={img} alt={prod_name} />
         
            <h4>{prod_name}</h4>
            <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className={fourth}></i>
                <i className={fifth}></i>
            </div>
            <p>$50.00</p>
            <button onClick={addToCart} className="btn">
                <i className="fa-solid fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    );
}

export default FeaturedCol;
