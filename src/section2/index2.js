import React from "react";

export default function Index2() {
    const result = React.useState("Hello")
    alert(result)
    return (
        <div className="state">
            <h1 className="state-title">Is state important to know?</h1>
            <div className="state-value">
                <h1>Yes</h1>
            </div>
        </div>
    )
}