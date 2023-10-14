import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/interface/post';
import { StateStore } from 'src/app/interface/state-store';
import { deletePost, selectPostToEdit } from 'src/app/store/actions/posts/posts.actions';
import { PostsFormComponent } from '../posts-form/posts-form.component';

@Component({
  selector: 'app-posts-item-list',
  templateUrl: './posts-item-list.component.html',
  styleUrls: ['./posts-item-list.component.scss']
})
export class PostsItemListComponent {
  @Input() post!: Post;
  titleShort = '';
  bodyShort = '';

  constructor(
    private storePosts: Store<StateStore>,
    public dialog: MatDialog,

  ) {  }

  ngOnInit(): void {
    if( this.post) {
      this.titleShort = this.post.title.length > 20 ? this.post.title.substring(0, 20) + '...' : this.post.title;
      this.bodyShort = this.post.body.length > 50 ? this.post.body.substring(0, 50) + '...' : this.post.body;
    }
  }
  // open dialog to edit post
  openDialog(): void {
    const dialogRef = this.dialog.open(PostsFormComponent, {
      data: {title: this.post.title, body: this.post.body},
    });


    dialogRef.afterOpened().subscribe(result => {
      this.selectPost();
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // function to select post
  selectPost(): void {
    this.storePosts.dispatch(selectPostToEdit({ post: this.post }));
  }

  // function to delete post call action from store
  deletePost(): void {
    this.storePosts.dispatch(deletePost({ postId: this.post.id }));
  }  

}
