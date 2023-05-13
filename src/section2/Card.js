import React from "react";

function Card() {
    const [contact, setContact] = React.useState({
        firstName:"John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavourite: false
    })

    return(
        <section>
            <div className="card-container">
                <img src="./images/card-image.png" className ="image" alt="" />

            <img src="./images/empty-star.png"  className="star" alt="" />

            <h1>John Doe</h1>
            <p> +1 (718) 555-1212</p>
            <p>itsmyrealname@example.com</p>
            </div>
        </section>
    )
}

export default Card