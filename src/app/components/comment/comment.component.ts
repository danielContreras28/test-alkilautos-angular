import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NewComment } from 'src/app/interface/comment';
import { StateStore } from 'src/app/interface/state-store';
import { addComment } from 'src/app/store/actions/comments/comments.action';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  comment: NewComment = {
    name: '',
    body: '',
  };

  commentFormControl = new FormGroup({
    nameFormControl: new FormControl('', [Validators.required]),
    descriptionFormControl: new FormControl('', [Validators.required]),
  });

  constructor(
    private storeComments: Store<StateStore>
  ) {}

  ngOnInit(): void {}

  SaveNewComment() {
    const {
      commentFormControl: { status, value },
    } = this;
    if (status === 'VALID') {
      this.storeComments.dispatch(
        addComment({
          comment: {
            name: value?.nameFormControl || '',
            body: value?.descriptionFormControl || '',
          },
        })
      );
    }
  }

  CheckInputValue(e: any) {
    console.log(e);
  }

  getStatescomments() {
    this.storeComments
      .select((state: StateStore) => {
        return state.comments;
      })
      .subscribe((comments) => {
        this.comment = comments.newComment;
      });
  }
}
