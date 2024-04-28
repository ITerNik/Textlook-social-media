import {useState} from "react";
import heart from '../shared/assets/icons/love.png'
import heartColored from '../shared/assets/icons/love_clicked.png'

export function LikeButton() {
    const [like, setLike] = useState(false)
    const [clicked, setClicked] = useState(false)

    return (
        <img src={like? heartColored : heart} alt="heart-icon"
             className={`w-6 h-6 cursor-pointer transition-all ease ${like && clicked? 'scale-150': ''}`}
             onClick={() => {setLike(prevState => !prevState)
                 setClicked(true)
                 setTimeout(() => setClicked(false), 200)
             }}/>
    )
}