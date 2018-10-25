import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavigationotherComponent } from './sidenavigationother.component';

describe('SidenavigationotherComponent', () => {
  let component: SidenavigationotherComponent;
  let fixture: ComponentFixture<SidenavigationotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavigationotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavigationotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
