import React, { PureComponent } from 'react'

class FunctionClick extends PureComponent {
    constructor() {
        super()

        this.state = {
            
        }
    }

    clickHander() {
        console.log("button clicked")
    }

    render() {
        return (
          <button onClick={() => this.clickHandler()}>Click</button>  
        )
    }
}

export default FunctionClick








// import React from 'react'

// function FunctionClick() {

//     function clickHandler () {
//             console.log("button clicked")
//     }
//     return (
//         <div>
//             <button onClick={clickHandler}>Click</button>
//         </div>
//     )
// }

// export default FunctionClick
