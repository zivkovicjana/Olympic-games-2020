import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedaljaComponent } from './medalja.component';

describe('MedaljaComponent', () => {
  let component: MedaljaComponent;
  let fixture: ComponentFixture<MedaljaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedaljaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedaljaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
