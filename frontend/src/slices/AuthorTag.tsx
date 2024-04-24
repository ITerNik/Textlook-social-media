export interface AuthorTagProps {
    username: string,
    img: string
}

export function AuthorTag({username, img}: AuthorTagProps) {
    return (
        <div className="flex justify-start gap-x-2">
            <img src={img} className="w-6 h-6 rounded-full"/>
            <p>{username}</p>
        </div>
    )
}