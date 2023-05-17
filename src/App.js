import React from "react"
// import logo from './logo.svg';
// import './App.css'
// import Header from "./section/header.js";
// import Trip from "./section/trip.js";
// import data from "./section/data.js";
// import "./section2/style2.css";
// import Header from "./section2/header1.js";
// import Meme from "./section2/meme.js";
// import memesData from "./section/memesData.js";
import "./section2/index2.css";
import Counter from "./section2/index3.js";
// import Exercise from "./section2/exercise.js";
// import "./section2/style3.css";
// import Index from "./section2/index.js";
// import Index2 from "./section2/index2.js";
// import Card from "./section2/Card.js"
// import "./section2/card.css"
// import Header from "./section2/header.js"
// import Body from "./section2/Body.js"
// import "./section2/body.css"
// import Boxes from "./section2/boxes.js"
// import "./section2/boxes.css"

function App() {
  // const content = data.map(item =>{
  //   return (
  //     <Trip
  //       {...item}
  //     />
  //   )
  // })


  
  // const [user, setUser] = React.useState("Bobs")
  // const [squares, setSquares] = React.useState(Boxes)

  // const squareElement = squares.map(square => (
  //   <div className="box" key ={square.id}>

  //   </div>
  // ))

  return (
    // <div className="container">
    // <Exercise />
    // </div>
    <div>
     {/* <Index2 />
     <Index /> 
     <Card /> */}
      <Counter /> 
      {/*  <Header />
      <Meme /> */}

      {/* <Header
      name = {user}  />
      <Body
      name = {user}  /> */}

      {/* {squareElement} */}

    </div>

    // <div>
      // <Header />
    //   <section>
    //     {content}

    //   </section>
    // </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App
