import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap, of, switchMap } from "rxjs";
import { CommentsService } from "src/app/services/comments.service";
import { getPosts, resetFormStatePost } from "../../actions/posts/posts.actions";
import { addComment, resetFormStateComment } from "../../actions/comments/comments.action";

@Injectable()

export class CommentEffects {
    constructor(
        private actions$: Actions,
        private commentsService: CommentsService
    ){}

    // create effect for addComment
    addComment$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addComment),
            mergeMap((action) => {
                return this.commentsService.addComment(action.comment)
                .pipe(
                    switchMap(() => of(resetFormStateComment(), getPosts(), resetFormStatePost())),
                    catchError((error) => of(error))
                )
            })
        )
    })
}