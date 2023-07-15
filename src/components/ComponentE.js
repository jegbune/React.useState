import React, { PureComponent } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    static contextType= UserContext
    render() {
        return (
            <div>
                ComponentE context {this.context}
                <ComponentF />
            </div>
        )
    }
}

export default ComponentE