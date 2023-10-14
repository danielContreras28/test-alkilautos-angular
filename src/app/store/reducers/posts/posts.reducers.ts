import { createReducer, on } from "@ngrx/store";
import { PostsState } from "src/app/interface/post";
import { loadPosts, resetFormStatePost, selectPostToEdit } from "../../actions/posts/posts.actions";


const initialState: PostsState = {
    posts: [],
    newPost: {
        title: '',
        body: ''
    },
    loading: false,
    error: null,
};

export const postsReducer =  createReducer(
    initialState,
    // load posts
    on(loadPosts, (state, { posts }) => {
        return {
            ...state,
            posts: posts
        }
    }),
    // reset form
    on(resetFormStatePost, (state) => {
        return {
            ...state,
            selectedPost: undefined,
            newPost: {
                title: '',
                body: ''
            }
        }
    }),
    // select post
    on(selectPostToEdit, (state, { post }) => {
        return {
            ...state,
            selectedPost: post
        }
    })
)