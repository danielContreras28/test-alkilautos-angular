import { CommentsState } from "./comment";
import { PostsState } from "./post";

export interface StateStore {
    posts: PostsState;
    comments: CommentsState;
}
