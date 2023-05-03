// import logo from './logo.svg';
import './App.css';
import Header from "./section/header.js";
import Trip from "./section/trip.js"
import data from "./section/data.js"

function App() {
  const content = data.map(item =>{
    return (
      <Trip
        {...item}
      />
    )
  })
  return (
    <div>
      <Header />
      <section>
        {content}

      </section>
    </div>

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
