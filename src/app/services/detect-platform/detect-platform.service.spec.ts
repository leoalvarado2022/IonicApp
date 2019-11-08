import {TestBed} from '@angular/core/testing';

import {DetectPlatformService} from './detect-platform.service';

describe('DetectPlatformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetectPlatformService = TestBed.get(DetectPlatformService);
    expect(service).toBeTruthy();
  });
});
