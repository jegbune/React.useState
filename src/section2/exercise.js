import React from "react"

function handleClick() {
    alert("I was clicked")
}
function imageBlur() {
    // alert("mouse moved over")
    
}


function Exercise() {
     return (
        <div className="Container">
            <img onMouseOver={imageBlur} src="./images/geirangerfjord.png"  className= "exe-image" alt="" />
            <button onClick={handleClick} className="exe-button">Click me</button>
        </div>
     )
}
export default Exercise