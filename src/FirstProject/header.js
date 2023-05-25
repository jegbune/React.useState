import React from "react";
import logo from"./logo.svg"

function Header() {
    return(
        <header>
    <img src={logo} width="80px" alt="logo" />
    
    <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </header>
    )
}
export default Header