import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfootherComponent } from './infoother.component';

describe('InfootherComponent', () => {
  let component: InfootherComponent;
  let fixture: ComponentFixture<InfootherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfootherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfootherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
