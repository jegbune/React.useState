import React from 'react'

function Mapping() {
    let Array = [1,4,9,16,25]
    const map1 = Array.map(x => x * x + ",")

    return (
        <div>{map1}</div>
        // alert(map1)
    )
}

export default Mapping
