import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscsComponent } from './discs.component';

describe('DiscsComponent', () => {
  let component: DiscsComponent;
  let fixture: ComponentFixture<DiscsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
