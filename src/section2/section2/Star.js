import React from "react";


function Star(props) {

    return (
        <img src= {props.isFilled} onClick={props.handleClick} className="star" alt="" />

    )
}

export default Star