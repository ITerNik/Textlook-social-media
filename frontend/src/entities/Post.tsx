import {PostProps} from "../shared/types/postTypes.ts"
import {AuthorTag} from "../slices/AuthorTag.tsx"
import test from "../shared/assets/images/logo.png"
import like from "../shared/assets/icons/love.png"

export function Post({post} : PostProps) {
    return (
        <div className="p-4 rounded-xl bg-amber-100">
            <AuthorTag username={'Elon Mask'} img={test} />
            <div className="pl-8 pt-4 flex flex-col gap-y-4">
                <p>{post.content}</p>
                <div className="flex justify-between">
                    <img src={like} className="w-6 h-6 cursor-pointer"/>
                    <p className="text-xs self-center">{new Date(Date.parse(post.created_at)).toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}