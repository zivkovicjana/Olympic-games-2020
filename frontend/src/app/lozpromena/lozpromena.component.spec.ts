import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LozpromenaComponent } from './lozpromena.component';

describe('LozpromenaComponent', () => {
  let component: LozpromenaComponent;
  let fixture: ComponentFixture<LozpromenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LozpromenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LozpromenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
