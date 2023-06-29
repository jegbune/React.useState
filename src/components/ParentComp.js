import React, { PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'jeremiah'
            
        }
    }
    componentDidMount() {
        setInterval(() =>{
            this.setState({
                name: 'Jeremiah'
            }
            )
        }, 2000)
    }

    render() {
        console.log('*****************Parent Comp Render*****************')
        return (
            <div>
                Parent Component
                <MemoComp />
                {/* <RegComp name={this.state.name} />
                <PureComp name ={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp