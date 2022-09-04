import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZemljaComponent } from './zemlja.component';

describe('ZemljaComponent', () => {
  let component: ZemljaComponent;
  let fixture: ComponentFixture<ZemljaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZemljaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZemljaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
