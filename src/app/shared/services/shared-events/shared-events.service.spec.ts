import { TestBed } from '@angular/core/testing';

import { SharedEventsService } from './shared-events.service';

describe('SharedEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedEventsService = TestBed.get(SharedEventsService);
    expect(service).toBeTruthy();
  });
});
