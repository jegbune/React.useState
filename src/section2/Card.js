import React from "react";

function Card() {
    const [contact, setContact] = React.useState({
        firstName:"John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavourite: false,
    })


    let isFavourite = contact.isFavourite ? "images/filled-star.png" : "./images/empty-star.png";

    function toggleFavourite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavourite: !prevContact.isFavourite
        }))
    }
    return(
        <section>
            <div className="card-container">
                <img src="./images/card-image.png" className ="image" alt="" />

            <img src= {isFavourite} onClick={toggleFavourite} className="star" alt="" />

            <h1>{contact.firstName + " " + contact.lastName}</h1>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            </div>
        </section>
    )
}

export default Card