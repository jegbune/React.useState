import React, { PureComponent } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <UserConsumer>
                {
                    username => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF