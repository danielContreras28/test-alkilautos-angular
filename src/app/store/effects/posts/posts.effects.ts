import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addPost, deletePost, editPost, getPosts, loadPosts, resetFormStatePost, selectPostToEdit } from '../../actions/posts/posts.actions';
import { catchError, concatMap, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';

@Injectable()

export class PostsEffects {
    constructor(
        private actions$: Actions,
        private postsService: PostsService
    ){}

    // create effect for loadPosts 
    loadPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getPosts),
            tap(() => console.log('effect')),
            concatMap((action) => {
                console.log(action);
                return this.postsService.LoadPosts()
                .pipe(
                    map(posts =>{
                        // handle success action if needed
                        return loadPosts({ posts })
                    })
                    ,catchError((error) => of(error))
                )
            })
        )
    })

    // create effect for addPost
    addPost$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(addPost),
        mergeMap((action) => {
          console.log(action);
          return this.postsService.addPost(action.post)
          .pipe(
            switchMap(() => of(resetFormStatePost(), getPosts())),
            catchError((error) => of(error))
          )
        })
      );
    });

    // create effect for editPost
    editPost$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(editPost),
        mergeMap((action) => {
          console.log(action);
          return this.postsService.editPost(action.postId, action.updatedPost)
            .pipe(
              switchMap(() => of(resetFormStatePost(), getPosts())),
              catchError((error) => of(error))
            )
        })
      );
    });

    // create effect for deletePost
    deletePost$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(deletePost),
        mergeMap((action) => {
          console.log(action);
          return this.postsService.deletePost(action.postId)
            .pipe(
              switchMap(() => of(getPosts())),
              catchError((error) => of(error))
            )
        })
      );
    });

}