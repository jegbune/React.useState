import React from "react";

export default function Index2() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    // alert(isImportant)
    // setIsImportant("No")

    function handleClick() {
        setIsImportant("No")
        // alert("This element was Clicked")
    }

    return (
        <div className="state">
            <h1 className="state-title">Is state important to know?</h1>
            <div onClick={handleClick} className="state-value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}