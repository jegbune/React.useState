import React from "react";
import logo from"./logo.svg"
import "./style.css"


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
    
    
    function Body() {
        return(
    <div className="container">
        
        <h1>Reason I'm excited to learn React</h1>
        <ol>
            <li>It's a popular library, so I'll be able to fit in with the cool kids</li>
            <li>I'm more likely to get a job as a developer if I know React</li>
        </ol>
        
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
            <Footer />
        </div>
    )
   } 