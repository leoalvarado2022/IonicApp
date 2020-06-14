import { TestBed } from '@angular/core/testing';

import { DeviceSyncService } from './device-sync.service';

describe('TallySyncService', () => {
  let service: DeviceSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
