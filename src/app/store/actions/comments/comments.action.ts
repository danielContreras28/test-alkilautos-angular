import { createAction, props } from "@ngrx/store";
import { NewComment } from "src/app/interface/comment";

// actions for calling API to add new comment
export const addComment = createAction('[Posts] Add Post', props<{ comment: NewComment }>());
// actions for reset form state when adding new comment
export const resetFormStateComment = createAction('[Comments] Reset Form State');
