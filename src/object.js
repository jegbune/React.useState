import React from "react";
import logo from"./logo.svg"
import "./style.css"
function Object() {
    return(
<div className="container">
    
    <header>
    <img src={logo} width="80px" alt="logo" />
    </header>
    <h1>Fun facts about React</h1>
    <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ol>
</div>
    )
}
export default Object