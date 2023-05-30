import React from "react";
import "./style.css"
import logo from "./airbnb/airbnb-logo.png"


function Header() {
    return(
        <div className="header">
        <img src="./airbnb/hero-grid.png" alt="" />

            <img src={logo} className = "header-logo" alt="" />
            <p> thisis jsx</p>
        </div>
    )
}

    export default function MainPage() {
        return(
            <div>
                <Header />
            </div>
        )
    }