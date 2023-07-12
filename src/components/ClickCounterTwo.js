import React, { PureComponent } from 'react'

class ClickCounterTwo extends PureComponent {
    
    
    render() {
        const {count, incrementCount} = this.props
        return (
        <button onClick={incrementCount}>Clicked {count} times</button>    
        )
    }
}

export default ClickCounterTwo