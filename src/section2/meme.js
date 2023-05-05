import React from "react"
import memesData from "../section/memesData"

let url
function getMemeimage() {
  
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    url =  memesArray[randomNumber].url
    
}

function Meme() {
    
    
    return (
        
        <main>
            <p>{url}</p>
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
        </main>


    )
}

export default Meme