import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './interface/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-alkilautos-angular';
  posts: Post[] = []

  changeTitle() {
    this.title = 'alkilautos';
  }
}
