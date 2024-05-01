import {PostProps} from "../shared/types/postTypes.ts"
import {AuthorTag} from "../slices/AuthorTag.tsx"
import {LikeButton} from "../features/LikeButton.tsx";
import {TipButton} from "../slices/TipButton.tsx";

export function Post({post, editable = false} : PostProps) {
    return (
        <div className="p-8 flex flex-col gap-y-6 text-slate-600 rounded-md bg-white border-[1px] border-slate-300">
            <div className="flex justify-between">
                <AuthorTag username={`${post.name || post.username} ${post.surname || ''}`} img={`/images/${post.username}.png`} date={post.created_at}/>
                {editable && <div className="flex gap-4">
                    <div className="rounded-full bg-slate-400 cursor-pointer w-12 h-12">
                        <TipButton tip="Редактировать запись">
                            <img src="src/shared/assets/icons/edit.png" alt="edit"
                                 className="p-4"/>
                        </TipButton>
                    </div>
                    <div className="rounded-full bg-slate-400 cursor-pointer w-12 h-12">
                        <TipButton tip="Удалить запись">
                            <img src="src/shared/assets/icons/delete.png" alt="delete"
                            className="p-[13px]"/>
                        </TipButton>
                    </div>
                </div>}
            </div>
            <div className="flex flex-col gap-y-6">
                <p>{post.content}</p>
                <div className="flex justify-start items-center gap-x-4 border-t-2 border-slate-100 pt-4">
                    <LikeButton likes={post.likes} post_id={post.id}/>
                </div>
            </div>
        </div>
    )
}