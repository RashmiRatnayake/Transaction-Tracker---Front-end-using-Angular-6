import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationInsideComponent } from './navigation-inside.component';

describe('NavigationInsideComponent', () => {
  let component: NavigationInsideComponent;
  let fixture: ComponentFixture<NavigationInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
