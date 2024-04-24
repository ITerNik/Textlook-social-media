import {useEffect, useState} from "react";
import axios from "axios";

interface IPost {
    id: number,
    content: string,
    user_id: number,
    created_at: string,
    updated_at: string
}


export function Post() {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect( () => {
        axios.get('http://localhost:8080/handlers/post/get_all_posts.php')
            .then(res => setPosts(res.data))
    }, [])

    return (
        <>
            {posts && posts.map(post => <p>{post.content}</p>)}
        </>
    )
}