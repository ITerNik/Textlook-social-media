import {useEffect, useState} from "react";
import heart from '../shared/assets/icons/love.png'

import heartColored from '../shared/assets/icons/love_clicked.png'
import axios from "axios";


export function LikeButton({likes, post_id}: {likes: number, post_id: number}) {
    const GET_PARAMETERS = `username=${sessionStorage.getItem('username')}&post_id=${post_id}`
    function likePost() {
        axios.get(`http://localhost:8080/handlers/post/like_post.php?${GET_PARAMETERS}`)
            .catch(err => alert(err.message))
    }

    function removeLike() {
        axios.get(`http://localhost:8080/handlers/post/remove_like.php?${GET_PARAMETERS}`)
            .catch(err => alert(err.message))
    }

    const [like, setLike] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [likesNumber, setLikesNumber] = useState(likes)

    useEffect(() => {
        axios.get(`http://localhost:8080/handlers/post/check_if_liked.php?${GET_PARAMETERS}`)
            .then(res => {setLike(res.data)})
            .catch(err => alert(err.message))
    }, [])

    function likeHandler() {
        if (like) {
            removeLike()
            setLikesNumber(likesNumber - 1)
        }  else {
            likePost()
            setLikesNumber(likesNumber + 1)
        }
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
            <span className="text-xl font-bold text-slate-400">{likesNumber}</span>
        </>
    )
}
