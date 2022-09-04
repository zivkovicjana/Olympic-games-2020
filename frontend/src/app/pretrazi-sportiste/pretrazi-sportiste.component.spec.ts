import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretraziSportisteComponent } from './pretrazi-sportiste.component';

describe('PretraziSportisteComponent', () => {
  let component: PretraziSportisteComponent;
  let fixture: ComponentFixture<PretraziSportisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretraziSportisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PretraziSportisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
