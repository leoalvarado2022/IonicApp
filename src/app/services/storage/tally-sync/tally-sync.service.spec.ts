import { TestBed } from '@angular/core/testing';

import { TallySyncService } from './tally-sync.service';

describe('TallySyncService', () => {
  let service: TallySyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TallySyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
