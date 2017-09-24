import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropBindingComponent } from './prop-binding.component';

describe('PropBindingComponent', () => {
  let component: PropBindingComponent;
  let fixture: ComponentFixture<PropBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
