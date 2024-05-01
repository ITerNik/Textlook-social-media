import {useEffect, useState} from "react";
import heart from '../shared/assets/icons/love.png'

import heartColored from '../shared/assets/icons/love_clicked.png'
import axios from "axios";

export function LikeButton({likes, post_id}: {likes: number, post_id: number}) {
    const [like, setLike] = useState(false)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8080/handlers/post/check_if_liked.php?username=${sessionStorage.getItem('username')}&post_id=${post_id}`)
            .then(res => {setLike(res.data)})
            .catch(err => alert(err.message))
    }, [])

    function likeHandler() {
        setLike(prevState => !prevState)
        setClicked(true)
        setTimeout(() => setClicked(false), 200)
    }

    return (
        <>
            <div
                className={`transition-all ease w-12 h-12 rounded-full p-[14px] ${like ? 'bg-orange-600' : 'bg-slate-400'} cursor-pointer`}
                onClick={likeHandler}>
                <img src={like ? heartColored : heart} alt="heart-icon"
                     className={`transition-all flex-1 ease ${like && clicked ? 'scale-150' : ''}`}
                />
            </div>
            <span className="text-xl font-bold text-slate-400">{likes + (like ? 1 : 0)}</span>
        </>
    )
}
