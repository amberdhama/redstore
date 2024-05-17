import React from "react";

function Cart() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        window.location.reload(); // Refresh the page to reflect the changes
    };

    return (
        <div className="smallcontainer cartpage">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className="cart-info">
                                    <img src={item.img} alt="" />
                                    <div>
                                        <p>{item.prod_name}</p>
                                        <small>Price: $50.00</small>
                                    </div>
                                </div>
                            </td>
                            <td><input type="number" name="" id="" value="1" /></td>
                            <td>$50.00</td>
                            <td>
                                <button onClick={() => removeFromCart(index)} className="btn">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="total">
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>$200</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$30</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$230</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cart;
