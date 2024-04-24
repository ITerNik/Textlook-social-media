import {useEffect, useState} from "react";
import axios from "axios";
import {Post} from "../entities/Post.tsx";
import {IPost} from "../shared/types/postTypes.ts";

export function Feed() {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        axios.get('http://localhost:8080/handlers/post/get_all_posts.php')
            .then(res => setPosts(res.data))
            .catch(_ => setPosts([{id: 0, content: 'No posts found', user_id: 0, updated_at: '', created_at: ''}]))
    }, [])

    return (
        <ul className="flex flex-col w-[80%] mx-auto p-4 gap-y-4">
            {posts && posts.map(post => <Post post={post}/>)}
        </ul>
    )
}