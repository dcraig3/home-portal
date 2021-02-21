import { TestBed } from '@angular/core/testing';

import { MainInfoService } from './main-info.service';

describe('MainInfoService', () => {
  let service: MainInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
