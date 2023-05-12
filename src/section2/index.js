import React from "react";


function Index() {
    const [thingArray, setThingsArray] = React.useState(["Things 1", "Things 2"])

    function addItem() {
       setThingsArray( prevThingsArray => [...prevThingsArray,  `Things ${prevThingsArray.length + 1}`] 
              ) 
    
    }
    const thingsElement = thingArray.map(thing => <p>{thing}</p>)

return (
    <div>
           <button onClick={addItem}>Add Item</button>
           {thingsElement}
    </div>
)
    //     // const thingArray = ["Thing 1", "Thing 2"]
//     const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
//     // const thingsElement = thingArray.map(thing => {
//     const thingsElement = things.map(thing => {
//         return(
//             <p key={thing}>{thing}</p>
            
//             )
//         } )
//         function addArray() {
//             const newThingText = `Thing ${things.length + 1}`
//             setThings(prevState => [...prevState, newThingText])
//         //    thingArray.push(`Thing ${thingArray.length +1}`)
//         //    alert(thingArray)
//        }
//         return (
//         <div>
//             <button onClick={addArray}>Add Item</button>
//             {thingsElement}
//         </div>
//     )

}
export default Index