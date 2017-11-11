import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDescComponent } from './mini-desc.component';

describe('MiniDescComponent', () => {
  let component: MiniDescComponent;
  let fixture: ComponentFixture<MiniDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
