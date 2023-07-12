import React, { PureComponent } from 'react'

class User extends PureComponent {
    

    render() {
        return (
            <div> 
                {this.props.render(true)} 
            </div>
        )
    }
}

export default User