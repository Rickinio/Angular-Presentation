import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinDescComponent } from './min-desc.component';

describe('MinDescComponent', () => {
  let component: MinDescComponent;
  let fixture: ComponentFixture<MinDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
