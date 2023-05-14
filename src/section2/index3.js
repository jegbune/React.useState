import React from "react";
import Count from "./section2/Count.js"
export default function Counter() {
 const [count, setCount] = React.useState(0)

 function add() {
    // alert("add")
    // setCount(count + 1)
    // setCount(function (oldValue){
    //     return oldValue + 1
    // })
    setCount(prevCount => prevCount + 1)

 }
 
 function subtract() {
    // alert("add")
    // setCount(count - 1)
    setCount(prevCount => prevCount - 1)
 }


    return(
        <div className="counter">
            <button className="counter-minus" onClick={subtract}>-</button>
            <Count
            number ={count} />
            <button className="counter-plus" onClick={add}>+</button>
        </div>
    )
}