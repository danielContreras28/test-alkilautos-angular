import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PostsFormComponent } from 'src/app/components/posts-form/posts-form.component';
import { PostsState } from 'src/app/interface/post';
import { getPosts, resetFormStatePost } from 'src/app/store/actions/posts/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  title: string = '';
  body: string = '';

  constructor(
    private storePosts: Store<PostsState>,
    public dialog: MatDialog,
  ) {  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.storePosts.dispatch(getPosts());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostsFormComponent, {
      data: {title: this.title, body: this.body},
    });

    dialogRef.afterOpened().subscribe(result => {
      this.storePosts.dispatch(resetFormStatePost());
    })
  }

}
