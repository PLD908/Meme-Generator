import React from 'react'
import Memedate from './Memedate'

const Content = ({btn}) => {
    function getMemeImg() {
        const memesArr =  Memedate.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArr.length);
        const {url} = memesArr[randomNumber];
    }

    return (
        <div className="content">
            <div className="input-box">
                <input type="text" />
                <input type="text" />
            </div>

            <button type="button" onClick={getMemeImg} className='btn'>{btn}</button>

            <div className="image-content">
                <img src="../assets/images/memeimg.png" alt="meme image" />
            </div>
        </div>
    )
}

export default Content