import React from "react"
import memesData from "../section/memesData"

function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    
    function getMemeimage() {
      
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    
     
    return (
        
        <main>
            <p></p>
            <div className="form">
            <input 
                type="text" 
                className="form-input" 
                placeholder="Top text  "
                />

            <input 
                type="text" 
                className="form-input" 
                placeholder="Bottom text"
                />

            <button 
                className="form-button"
                onClick={getMemeimage}>
                    Get a new meme image 🖼
                     </button>
            </div>
            <img src={memeImage} className="meme-image" alt="memeImage" />
        </main>


    )
}

export default Meme