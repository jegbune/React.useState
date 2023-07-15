import React, { PureComponent } from 'react'
import ComponentE from './ComponentE'

class ComponentC extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <ComponentE />
            </div>
        )
    }
}

export default ComponentC