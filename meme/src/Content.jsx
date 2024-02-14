import React from 'react'
import Memedate from './Memedate'

const Content = ({btn}) => {
    const [memeImage, setMemeImage] = React.useState(); 

    function getMemeImg() {
        const memesArr = Memedate.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArr.length);
        setMemeImage(memesArr[randomNumber].url);
    }

    return (
        <div className="content">
            <div className="input-box">
                <input type="text" />
                <input type="text" />
            </div>

            <button type="button" onClick={getMemeImg} className='btn'>{btn}</button>

            <div className="image-content">
                <img src={memeImage} />
            </div>
        </div>
    )
}

export default Content