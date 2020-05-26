import { TestBed } from '@angular/core/testing';

import { ManualSyncService } from './manual-sync.service';

describe('ManualSyncService', () => {
  let service: ManualSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManualSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
