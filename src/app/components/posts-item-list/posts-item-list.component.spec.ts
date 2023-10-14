import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsItemListComponent } from './posts-item-list.component';

describe('PostsItemListComponent', () => {
  let component: PostsItemListComponent;
  let fixture: ComponentFixture<PostsItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsItemListComponent]
    });
    fixture = TestBed.createComponent(PostsItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
