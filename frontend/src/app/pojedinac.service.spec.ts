import { TestBed } from '@angular/core/testing';

import { PojedinacService } from './pojedinac.service';

describe('PojedinacService', () => {
  let service: PojedinacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PojedinacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
