import { TestBed } from '@angular/core/testing';

import { SportIDisciplinaService } from './sport-i-disciplina.service';

describe('SportIDisciplinaService', () => {
  let service: SportIDisciplinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportIDisciplinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
