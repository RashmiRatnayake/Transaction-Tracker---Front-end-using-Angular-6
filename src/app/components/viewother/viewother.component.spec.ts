import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewotherComponent } from './viewother.component';

describe('ViewotherComponent', () => {
  let component: ViewotherComponent;
  let fixture: ComponentFixture<ViewotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
