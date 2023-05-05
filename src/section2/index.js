import React from "react";


function Index() {
    // const thingArray = ["Thing 1", "Thing 2"]
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    // const thingsElement = thingArray.map(thing => {
    const thingsElement = things.map(thing => {
        return(
            <p key={thing}>{thing}</p>
            
            )
        } )
        function addArray() {
            const newThingText = `Thing ${things.length + 1}`
            setThings(prevState => [...prevState, newThingText])
        //    thingArray.push(`Thing ${thingArray.length +1}`)
        //    alert(thingArray)
       }
        return (
        <div>
            <button onClick={addArray}>Add Item</button>
            {thingsElement}
        </div>
    )

}
export default Index