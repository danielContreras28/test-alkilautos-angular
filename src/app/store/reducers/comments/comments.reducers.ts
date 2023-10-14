import { createReducer, on } from "@ngrx/store";
import { CommentsState } from "src/app/interface/comment";
import { resetFormStateComment } from "../../actions/comments/comments.action";

const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null,
    newComment: {
        name: '',
        body: '',
    },
}

export const commentsReducer = createReducer(
    initialState,
    on(resetFormStateComment, (state) => {
        return {
            ...state,
            newComment: {
                name: '',
                body: ''
            }
        }
    })
)