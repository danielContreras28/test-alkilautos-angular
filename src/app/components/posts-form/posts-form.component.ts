import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NewPost, Post } from 'src/app/interface/post';
import { StateStore } from 'src/app/interface/state-store';
import { addPost, editPost } from 'src/app/store/actions/posts/posts.actions';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.scss'],
})
export class PostsFormComponent {
  selectedPost?: Post;
  post: NewPost = {
    title: '',
    body: '',
  };

  postFormControl = new FormGroup({
    titleFormControl: new FormControl('', [Validators.required]),
    descriptionFormControl: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<PostsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewPost,
    private storePosts: Store<StateStore>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getStatesPosts();
  }

  SaveNewPost() {
    const {
      postFormControl: { status, value },
    } = this;
    if (status === 'VALID') {
      if (this.selectedPost) {
        this.storePosts.dispatch(
          editPost({
            postId: this.selectedPost.id,
            updatedPost: {
              title: value?.titleFormControl || '',
              body: value?.descriptionFormControl || '',
            },
          })
        );
      } else {
        this.storePosts.dispatch(
          addPost({
            post: {
              userId: 11,
              title: value?.titleFormControl || '',
              body: value?.descriptionFormControl || '',
            },
          })
        );
      }
      this.dialogRef.close();
    }
  }

  getStatesPosts() {
    this.storePosts
      .select((state: StateStore) => state.posts)
      .subscribe((posts) => {
        this.selectedPost = posts.selectedPost;
        this.post = {
          title: this.selectedPost?.title || '',
          body: this.selectedPost?.body || '',
        };
      });
  }
}
