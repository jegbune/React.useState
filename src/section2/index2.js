import React from "react";

export default function Index2() {
    // const [isImportant, setIsImportant] = React.useState("Yes")
    // // alert(isImportant)
    // // setIsImportant("No")

    // function handleClick() {
    //     setIsImportant("No")
    //     // alert("This element was Clicked")
    // }

    const [isGoingOut, setIsGoingOut] = React.useState(true);

    function changeMind() {
        // setIsGoingOut(prevState => prevState === true ? false : true) 
        setIsGoingOut(prevState => !prevState) 
    }

    let answer = isGoingOut ? "Yes" : "No"

    return (
        <div className="state">
            <h1 className="state-title">
                {/* Is state important to know?*/}
                Do I feel like going out tonight
            </h1> 
            <div 
            onClick={changeMind}
            // onClick={handleClick} 
            className="state-value">
                {/* <h1>{isImportant}</h1> */}
                {/* <h1>{isGoingOut === true ? "Yes" : "No"}</h1> */}
                <h1>{answer} </h1>
            </div>
        </div>
    )
}