import React from "react"
const Greet = () =>{
return React.createElement (
    "div",
    null,
    React.createElement(
        "h1",
        {id:"Hello", className: "dummyClass"},
        "Hello Jeremiah Egbune"
    )
    // {id: "Hello", className: "dummyClass"},
    // "Hello Jeremiah"
/* <h1>Hello Jeremiah</h1> */
)}
export default Greet
