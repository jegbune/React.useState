import Greet from "./components/Greet";
import Welcome from "./components/Welcome"
import React, { Component, Fragment } from "react"
import Message from "./components/message";
import Counter from "./components/counter";
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/classClick"
import EventBind from "./components/EventBind"
import "./App.css"
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/stylesheet";
import Inline from "./inline";
import "./appStyles.css"
import styles from "./appStyles.module.css"
import Form from "./Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero"
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import Counter1 from "./components/Counter1";
class App extends Component {
  render()  {
    return (
      <div className="App">

      <Counter1 
      render ={(count,incrementCount) => (
      <ClickCounterTwo count={count} incrementCount = {incrementCount} />)
      }
      />
      <Counter1 
      render ={(count,incrementCount) => (
      <HoverCounterTwo count={count} incrementCount = {incrementCount} />)}/>
         {/* <ClickCounterTwo />

      <HoverCounterTwo />

      <User render={(isLoggedIn) => isLoggedIn ? 'Jeremiah': 'Guest'} /> */}

        {/* <ClickCounter name ='Jeremiah' /> */}

        {/* <HoverCounter name = 'Jeremiah' />. */}

        {/* <ErrorBoundary>
        <Hero heroName='Batman'/>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero heroName='Superman'/>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero heroName='Joker'/>
        </ErrorBoundary> */}
        
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp/> */}
        {/* <Table/> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <h1 className= 'error'>Error</h1> */}
        {/* <h1 className= {styles.success}>Success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary = {true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
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
