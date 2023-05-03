import React from "react"


function Trip(props) {
    return(
        <div className="container">
            <img src=  {`./images/${props.image}`} className="image" alt="trip-image" />
            <div className="container2">
            <div className="location">
            <div>
                <img src="./images/location.png" width = "8px" alt = "" />
            </div>
            <div className="country">{props.country}</div>
            <div><a href="#">{props.map}</a></div>
            </div>
            <h1 className="title">{props.title}</h1>
            <h4>{props.date}</h4>
            <p>{props.description}</p>
        </div>
        </div>
    )
}
export default Trip