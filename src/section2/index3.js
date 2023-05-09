import React from "react";

export default function Counter() {
 const [count, setCount] = React.useState(0)

 function add() {
    // alert("add")
    setCount(+1)
 }
 
 function subtract() {
    // alert("add")
    setCount(-1)
 }


    return(
        <div className="counter">
            <button className="counter-minus" onClick={subtract}>-</button>
            <div className="counter-count">
                <h1>{count}</h1>
            </div>
            <button className="counter-plus" onClick={add}>+</button>
        </div>
    )
}