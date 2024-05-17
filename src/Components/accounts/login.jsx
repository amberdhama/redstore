import React, { useState } from "react";

function Login() {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <>
            <div className="col-2">
                <img src="Images/images/image1.png" alt="" width="100%" />
            </div>
            <div className="col-2">
                <div className="form-container">
                    <div className="form-btn">
                        <span onClick={toggleForm}>Login</span>
                        <span onClick={toggleForm}>Register</span>
                        <hr className={showLoginForm ? "indicator" : ""} />
                    </div>
                    {showLoginForm ? (
                        <form>
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="Password" />
                            <button type="submit" className="btn">Login</button>
                            <a href="">Forgot Password</a>
                        </form>
                    ) : (
                        <form>
                            <input type="text" placeholder="username" />
                            <input type="email" placeholder="email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit" className="btn">Register</button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}

export default Login;
