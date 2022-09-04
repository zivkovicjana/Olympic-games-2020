import { TestBed } from '@angular/core/testing';

import { MedaljaService } from './medalja.service';

describe('MedaljaService', () => {
  let service: MedaljaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedaljaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
