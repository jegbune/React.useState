import React, { PureComponent } from 'react'

class HoverCounterTwo extends PureComponent {
    
    render() {
        const {count, incrementCount} = this.props
        return (
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        )
    }
}

export default HoverCounterTwo 