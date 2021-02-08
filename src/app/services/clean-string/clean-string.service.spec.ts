import { TestBed } from '@angular/core/testing';

import { CleanStringService } from './clean-string.service';

describe('CleanStringService', () => {
  let service: CleanStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
