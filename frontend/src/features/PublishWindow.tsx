import {FormEvent, useState} from "react";
import axios from "axios";

export function PublishWindow() {
    const [content, setContent] = useState('')

    function onSubmitHandler(event: FormEvent) {
        event.preventDefault()
        axios.post(`http://localhost:8080/handlers/post/create_post.php`, {content: content},
            {headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
                }})
            .then(res => alert(res.data.message))
            .catch(err => alert(err))
    }

    return (
        <form className="min-h-[100px] bg-white flex justify-around items-center rounded-md p-2"
            onSubmit={onSubmitHandler}>
            <textarea className="h-[80%] py-2 px-4 w-[90%] resize-none border-2 border-slate-100 rounded-md text-slate-500"
            placeholder="Что нового?" onChange={(e) => setContent(e.target.value)}/>
            <button className="bg-amber-600 w-14 h-14 rounded-md">
                <img src="src/shared/assets/icons/submit.png" alt="post-publish"/>
            </button>
        </form>
    )
}