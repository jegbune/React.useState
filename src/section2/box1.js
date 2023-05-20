// import "../section2/boxes.css"
import React from "react";

export default function Box1(props) {
    // alert(props.on)

    const [style, setStyle] =React.useState({backgroundColor:props.on ? "#222" : "none"})

    return(
        <div className="box" style={style} ></div>
    )
}