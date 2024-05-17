import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    useEffect(() => {
        const menuitems = document.getElementById('menuitems');
        if (menuitems) {
            menuitems.style.maxHeight = "0px";
        }
    }, []);

    function menutoggle() {
        const menuitems = document.getElementById('menuitems');
        if (menuitems) {
            menuitems.style.maxHeight = menuitems.style.maxHeight === "0px" ? "200px" : "0px";
        }
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src="Images\images\logo.png" alt="Logo" width="125px" />
            </div>
            <nav>
                <ul id="menuitems">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/product">Products</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="">Contact</NavLink></li>
                    <li><NavLink to="/accounts">Account</NavLink></li>
                </ul>
            </nav>
            <NavLink to="/cart"><img src="..\Images\images\cart.png" width="30px" height="30px"/></NavLink>
            <img src="..\Images\images\menu.png" className="menu-icon" onClick={menutoggle} alt="Menu"/>
        </div>
    );
}

export default Nav;
