import {useEffect, useState} from "react";
import {IPost} from "../shared/types/postTypes.ts";
import axios from "axios";
import {Post} from "../entities/Post.tsx";

export function AuthorFeed() {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        axios.get(`http://localhost:8080/handlers/post/get_authors_posts.php?username=${sessionStorage.getItem('username')}`)
            .then(res => setPosts(res.data))
            .catch(_ => setPosts([{id: 0, content: 'No posts found', username: '', image_url: '', created_at: ''}]))
    }, [])

    return (
        <div className={`flex flex-col w-full gap-y-4`}>
            {posts && posts.map(post => <Post editable={true} post={post} key={post.id}/>)}
        </div>
    )
}