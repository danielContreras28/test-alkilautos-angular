import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/interface/post';
import { StateStore } from 'src/app/interface/state-store';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {

  posts: Post[] = [];

  constructor(
    private storePosts: Store<StateStore>,
  ) {  }

  ngOnInit(): void {

    this.getStatesPosts();
  }
  
  getStatesPosts() {
    this.storePosts.select( (state: StateStore) => state.posts).subscribe(posts => {
      this.posts = posts.posts;
    })
  }
}
