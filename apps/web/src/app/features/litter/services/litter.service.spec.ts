import { TestBed } from '@angular/core/testing';

import { LitterService } from './litter.service';

describe('LitterService', () => {
  let service: LitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
