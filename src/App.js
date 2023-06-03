import Greet from "./components/Greet";
import Welcome from "./components/Welcome"
import React, { Component } from "react"
import Message from "./components/message";
import Counter from "./components/counter";
import "./App.css"
class App extends Component {
  render()  {
    return (
      <div className="App">
        {/* <Greet name="Diana"/>
        <Greet name="Clark"/>
        <Greet name="Bruce"/> 
        <Welcome name = "Clark" heroname = "Superman" />
        <Welcome name = "Bruce" heroname = "Batman" />
        <Welcome name = "Diana" heroname = "Wonder Woman" /> */}
      <Message />
        {/* <Counter /> */}
        </div>
    )
  }
}

export default App;

// import MainPage from "./FirstProject/object"

// import MainPage from "./airbnb/mainpage"
// function App() {
//       return(
//         <div>
//         <MainPage />
//         </div>
//       )
// }

// export default App






























































































// import logo from "./logo.svg"
// import "./App.css"

// function App() {
//   return(
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App
