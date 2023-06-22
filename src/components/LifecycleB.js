import React, { Component } from 'react'

class LifecycleB extends Component{
    constructor(props) {
        super(props)

        this.state = {
            name : 'Jeremiah'
        }
        console.log('LifecycleB constructor')
    }

static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
}


    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB ShouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpddate')
    }
    
    render() {
        console.log('LifecycleB render')
        return <div>
            Lifecycle B
        </div>
    }
}

export default LifecycleB