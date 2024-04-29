import {useEffect, useState} from "react";
import axios from "axios";
import {Post} from "../entities/Post.tsx";
import {IPost} from "../shared/types/postTypes.ts";

export function Feed({className = ''} : {className?: string}) {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        axios.get('http://localhost:8080/handlers/post/get_all_posts.php')
            .then(res => setPosts(res.data))
            .catch(_ => setPosts([{id: 0, content: 'No posts found', username: '', image_url: '', created_at: ''}]))
    }, [])

    return (
        <ul className={`feed flex flex-col p-4 gap-y-4 h-full ${className}`}>
            {posts && posts.map(post => <Post post={post} key={post.id}/>)}
        </ul>
    )
}