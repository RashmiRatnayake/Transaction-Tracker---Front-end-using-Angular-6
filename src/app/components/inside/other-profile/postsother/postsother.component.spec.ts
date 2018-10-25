import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsotherComponent } from './postsother.component';

describe('PostsotherComponent', () => {
  let component: PostsotherComponent;
  let fixture: ComponentFixture<PostsotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
