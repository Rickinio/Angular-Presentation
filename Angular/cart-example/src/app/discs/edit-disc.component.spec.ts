import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiscComponent } from './edit-disc.component';

describe('EditDiscComponent', () => {
  let component: EditDiscComponent;
  let fixture: ComponentFixture<EditDiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
