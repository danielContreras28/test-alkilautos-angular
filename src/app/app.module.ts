import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostsItemListComponent } from './components/posts-item-list/posts-item-list.component';
import { PostsEffects } from './store/effects/posts/posts.effects';
import { postsReducer } from './store/reducers/posts/posts.reducers';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsFormComponent } from './components/posts-form/posts-form.component';
import { CommentComponent } from './components/comment/comment.component';
import { commentsReducer } from './store/reducers/comments/comments.reducers';
import { CommentEffects } from './store/effects/comments/comments.effect';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsListComponent,
    PostsItemListComponent,
    PostsFormComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      posts: postsReducer,
      comments: commentsReducer,
    }),
    EffectsModule.forRoot([
      PostsEffects,
      CommentEffects,
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
