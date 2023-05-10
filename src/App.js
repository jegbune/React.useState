// import logo from './logo.svg';
// import './App.css'
// import Header from "./section/header.js";
// import Trip from "./section/trip.js";
// import data from "./section/data.js";
import "./section2/style2.css";
// import memesData from "./section/memesData.js";
// import Exercise from "./section2/exercise.js";
// import "./section2/style3.css";
// import "./section2/index2.css";
// import Index from "./section2/index.js";
// import Index2 from "./section2/index2.js";
// import Counter from "./section2/index3.js";
import Header from "./section2/header1.js";
import Meme from "./section2/meme.js";

function App() {
  // const content = data.map(item =>{
  //   return (
  //     <Trip
  //       {...item}
  //     />
  //   )
  // })
  return (
    // <div className="container">
    // <Exercise />
    // </div>
    <div>
      {/* <Index2 /> */}
      {/* <Counter />  */}
      <Header />
      <Meme />
    </div>

    // <div>
    //   <Header />
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

export default App;
