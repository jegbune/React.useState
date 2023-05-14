import React from "react"
import memesData from "../section/memesData"

function Meme() {
    // const [memeImage, setMemeImage] = React.useState(memesData.data.memes[30].url)

    const [meme, setMeme] = React.useState ({
        topText: "",
        bottomText: "",
        randomImage: memesData.data.memes[30].url
        })
    
        const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMemeimage() {
      
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })) 
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
            <img src= {meme.randomImage} className="meme-image" alt="" />
        </main>


    )
}

export default Meme