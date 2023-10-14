import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewPost, Post } from '../interface/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  constructor(
    private http : HttpClient
  ) { }

  // Get all posts
  LoadPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
  // Add new post
  addPost(newPost: NewPost): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', newPost);
  }
  // Edit post
  editPost(postId: number, updatedPost: NewPost): Observable<Post> {
    return this.http.put<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost);
  }
  // Delete post
  deletePost(postId: number): Observable<Post> {
    return this.http.delete<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
}
