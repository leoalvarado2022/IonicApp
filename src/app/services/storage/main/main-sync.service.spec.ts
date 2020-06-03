import { TestBed } from '@angular/core/testing';

import { MainSyncService } from './main-sync.service';

describe('MainSyncService', () => {
  let service: MainSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
