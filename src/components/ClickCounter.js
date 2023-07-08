import React, { PureComponent } from 'react'
import UpdatedComponent from '../withCounter'

class ClickCounter extends PureComponent {
    
    render() {
        const { count, incrementCount} = this.props
        return (
            <div> 
                <button onClick={incrementCount}> Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)