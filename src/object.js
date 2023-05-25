import React from "react";
import logo from"./logo.svg"
import "./style.css"


    function Header() {
        return(
            <header>
                <div className="logo-title">
        <img src={logo} width="80px" alt="logo" />
        <p className="page-title">ReactFacts</p>

                </div>
        
        <ul className="header-li">
            <li>React Course - Project 1</li>
        </ul>
        </header>
        )
    }
    
    
    function Body() {
        return(
    <div className="container">
        
        <h1 className="main-title">Fun facts about React</h1>
        <ul className="main-fact">
            <li className="main-li">Was first release in 2013</li>
            <li className="main-li">Was originally created by Jordan Walke</li>
            <li className="main-li">Has well over 100K Stars on GitHub</li>
            <li className="main-li">Is maintained by Facebook</li>
            <li className="main-li">Power thousands of enterprise apps, including Mobile apps</li>
        </ul>
        
    </div>
      )
        }
    
    
    function Footer() {
        return(
            <footer>
            <small> 2024 SovereignTech development. All right reserved.</small>
        </footer>
        )
    }
export default function MainPage() {
    return(
        <div>
            <Header />
            <Body />
            {/* <Footer /> */}
        </div>
    )
   } 