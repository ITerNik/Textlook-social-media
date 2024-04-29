import {PostProps} from "../shared/types/postTypes.ts"
import {AuthorTag} from "../slices/AuthorTag.tsx"
import {LikeButton} from "../features/LikeButton.tsx";

export function Post({post} : PostProps) {
    return (
        <div className="p-8 flex flex-col gap-y-6 text-slate-600 rounded-md bg-white border-[1px] border-slate-300">
            <AuthorTag username={post.username} img={post.image_url} date={post.created_at}/>
            <div className="flex flex-col gap-y-6">
                <p>{post.content}</p>
                <div className="flex justify-between border-t-2 border-slate-100 pt-4">
                    <LikeButton />
                </div>
            </div>
        </div>
    )
}