import React, { Component } from "react";

class Counter extends Component {

  constructor() {
    super() 
    
    this.state = {
      count: 0
    }

  }
  Increment(){
    this.setState({
      count: this.state.count + 1
    })
  }

  Decrement(){
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return(
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={() => this.Increment()}>Increment</button>
        <button onClick={() => this.Decrement()}>Decrement</button>
      </div>
    )
  }

}

























// class Counter extends Component {
//       constructor() {
//          super()

//          this.state = {
//             count: 0
//          }
//       }
//       increment() {
//         this.setState({
//             count: this.state.count + 2
//         },
//         () => {
//             console.log ("callback value", this.state.count)
//         })
//       }

//       incrementFive() {
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//       }

//       render() { 
//         return (
//         <div> 
//             <h1>
//              count - {this.state.count}
//             </h1> 
//             <button onClick={ () => this.incrementFive()}>
//                 Increment
//             </button>
//         </div>
//         )
//       }
// }
export default Counter