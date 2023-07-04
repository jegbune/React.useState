import React from 'react'
import  ReactDOM from 'react'
function PortalDemo(){
    return ReactDOM.createPortal(
        <h1>Portal Demo</h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
