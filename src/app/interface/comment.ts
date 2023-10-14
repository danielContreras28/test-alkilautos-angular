export interface NewComment {
    name: string;
    body: string;
}

export interface Comment {
    id: number;
    userId: number;
    name: string;
    body: string;    
}

export interface CommentsState {
    comments: Comment[];
    loading: boolean;
    error: string | null;
    newComment: NewComment;
}