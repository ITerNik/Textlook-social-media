export interface IPost {
    id: number,
    content: string,
    username: string,
    image_url: string,
    created_at: string,
}

export interface PostProps {
    post: IPost
}