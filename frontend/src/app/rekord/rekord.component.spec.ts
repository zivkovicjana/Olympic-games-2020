import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekordComponent } from './rekord.component';

describe('RekordComponent', () => {
  let component: RekordComponent;
  let fixture: ComponentFixture<RekordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RekordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RekordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
