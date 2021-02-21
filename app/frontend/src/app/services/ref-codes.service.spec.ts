import { TestBed } from '@angular/core/testing';

import { RefCodesService } from './ref-codes.service';

describe('RefCodesService', () => {
  let service: RefCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
