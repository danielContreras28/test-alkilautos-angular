export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface PostsState {
    posts: Post[];
    selectedPost?: Post;
    loading: boolean;
    error: string | null;
    newPost: NewPost;
}

export interface NewPost {
    title: string;
    body: string;
    userId?: number;
}