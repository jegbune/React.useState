import Greet from "./components/Greet";
import Welcome from "./components/Welcome"
import React, { Component } from "react"
import Message from "./components/message";
import Counter from "./components/counter";
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/classClick"
import EventBind from "./components/EventBind"
import "./App.css"
import ParentComponent from "./components/ParentComponent";
class App extends Component {
  render()  {
    return (
      <div className="App">
        <ParentComponent />
        {/* <EventBind /> */}

        {/* <FunctionClick />
        <ClassClick />  <Greet name="Diana"/>
        <Greet name = "Diana" heroname = "Wonder Woman" />
        <Welcome name = "Clark" heroname = "Superman" />
        <Greet name="Clark"/>
        <Greet name="Bruce"/> 
        <Welcome name = "Bruce" heroname = "Batman" />
        <Welcome name = "Diana" heroname = "Wonder Woman" />
         <Counter /> 
        <Message />*/}
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
