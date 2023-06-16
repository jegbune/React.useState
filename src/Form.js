import React, { PureComponent } from 'react'

class Form extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
            
        }
    }
        handleUsernameChange = (event) => {
            this.setState({
                username: event.target.value
            })
        }
        
    

    render() {
        return (
            <form>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
            </div>

            </form>
        )
    }

    }


export default Form