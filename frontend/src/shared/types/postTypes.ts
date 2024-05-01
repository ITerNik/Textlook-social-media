export interface IPost {
    id: number,
    content: string,
    name: string,
    surname: string,
    username: string,
    likes: number,
    created_at: string,
}

export interface PostProps {
    post: IPost,
    editable?: boolean
}