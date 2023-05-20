import React from "react";
import Boxes from "../section2/boxes"
import Box1 from "./box1.js"

export default function Box(props) {

    // const style ={backgroundColor:props.darkMode ? "#ccc" : "#000"}
    
      const [squares, setsquares] = React.useState(Boxes)
    

      const squareElement = squares.map(square => (
        // <div className="box" style={style}></div>
            <Box1 key ={square.id} on ={square.on} />
            ))
      
      return (
        <div className="container">
            {squareElement}
        </div>
      )
}


// ReactDOM.render( <App darkMode= {true} />, document.getElementById("root"))