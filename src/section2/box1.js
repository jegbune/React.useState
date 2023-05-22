// import "../section2/boxes.css"
import React from "react";

export default function Box1(props) {
    // alert(props.on)

    // const [on, setOn] =React.useState(props.on)

    const style ={backgroundColor: props.on ? "#222" : "transparent"}
    
    // function toggle() {
    //      setOn(prevOn => !prevOn)
     
    // }
    return(
        <div 
        className="box" 
        onClick={() => props.toggle(props.id)} 
        style={style} 
        >

        </div>
    )
}