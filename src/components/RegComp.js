import React, { Component } from 'react'

class RegComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log('*****************Regular Comp Render*****************')

        return (
            <div>
                Regular Component {this.state.name}
            </div>
        )
    }
}

export default RegComp