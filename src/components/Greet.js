import React, { Component } from "react"

// const Greet = () =>{
// return React.createElement (
//     "div",
//     null,
//     React.createElement(
//         "h1",
//         {id:"Hello", className: "dummyClass"},
//         "Hello  Jeremiah"
// //     )
//     // {id: "Hello", className: "dummyClass"},
//     // "Hello Jeremiah"
// /* <h1>Hello Jeremiah</h1> */
// )}

const Greet = props =>{
    const {name, heroname} = props

    return (
    <h1>Hello {name} a.k.a {heroname}</h1>)
}


    
export default Greet


