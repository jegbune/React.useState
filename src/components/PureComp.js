import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log('*****************Pure Comp Render*****************')

        return (
            <div>Pure Component {this.state.name}</div>
        )
    }
}

export default PureComp