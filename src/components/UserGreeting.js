import React, { PureComponent } from 'react'

class UserGreeting extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn : true     
        }
    }

    
    
    render() {
        // let message
        // if(this.state.isLoggedIn){
        //     return message = "Welcome Jeremiah"
        // } else {
        //    return message = "Welcome Guest"
        // }

       return this.state.isLoggedIn && <div> Welcome Jeremiah</div>
        // return(
            // this.state.isLoggedIn ? 
            // (<div>Welcome Jeremiah</div>) : 
            // (<div>Welcome Guest</div>)
        // )

    }

    
}

export default UserGreeting