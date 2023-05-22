import React from "react";
import Boxes from "../section2/boxes"
import Box1 from "./box1.js"

export default function Box(props) {

    // const style ={backgroundColor:props.darkMode ? "#ccc" : "#000"}
    
      const [squares, setSquares] = React.useState(Boxes)
    
    
    function toggle(id) {
      setSquares(prevSquare => {
        return prevSquare.map((square) => {
         return square.id === id ? {...square, on: !square.on} : square
        })
      })
        //  setSquares(prevSquares => {
        //   const newSquares = []
        //   for(let i = 0; i  < prevSquares.length; i++) {
        //       const currentSquare = prevSquares[i]
        //       if(currentSquare.id === id) {
        //         const updatedSquare = {
        //           ...currentSquare,
        //           on: !currentSquare.on
        //         }
        //         newSquares.push(updatedSquare)
        //       }else {
        //         newSquares.push(currentSquare)
        //       }
        //   }
        //   return newSquares 
        //  } )
         
      }
      const squareElement = squares.map(square => (
        // <div className="box" style={style}></div>
            <Box1 
            key ={square.id} 
            id ={square.id} 
            on ={square.on} 
            toggle = {toggle}
            />
            ))
      
      return (
        <div className="container">
            {squareElement}
        </div>
      )
}


// ReactDOM.render( <App darkMode= {true} />, document.getElementById("root"))