import { createAction, props } from "@ngrx/store";
import { NewPost, Post } from "src/app/interface/post";

// actions for calling API
export const getPosts = createAction('[Posts] Get Posts');
// actions for loading posts
export const loadPosts = createAction('[Posts] Load Posts', props<{ posts: Post[] }>());
// actions for calling API to add new post
export const addPost = createAction('[Posts] Add Post', props<{ post: NewPost }>());
// actions for reset form state when adding new post
export const resetFormStatePost = createAction('[Posts] Reset Form State');
// action for selecting post to edit
export const selectPostToEdit = createAction('[Posts] Select Post To Edit', props<{ post: Post }>());
// actions for calling API to edit post
export const editPost = createAction('[Posts] Edit Post', props<{ postId: number, updatedPost: NewPost }>());
// actions for calling API to delete post
export const deletePost = createAction('[Posts] Delete Post', props<{ postId: number }>());
