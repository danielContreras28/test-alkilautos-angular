import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewComment } from '../interface/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http : HttpClient
  ) { }

  // add new comment
  addComment(newComment: NewComment): Observable<Comment> {
    return this.http.post<Comment>('https://jsonplaceholder.typicode.com/comments', newComment);
  }
}
