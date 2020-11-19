import { TestBed } from '@angular/core/testing';

import { ApplicationRegistryService } from './application-registry.service';

describe('ApplicationRegistryService', () => {
  let service: ApplicationRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
