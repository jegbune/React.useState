import React from 'react'
import "./mystyle.css"

function Stylesheet(props) {
    let className = props.primary ? 'primary' : 'secondary'
    return (
        <div>
            <h1 className= {`${className} font-xl` }>StyleSheet</h1>
        </div>
    )
}

export default Stylesheet
