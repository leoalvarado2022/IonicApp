import {TestBed} from '@angular/core/testing';

import {ContractDetailService} from './contract-detail.service';

describe('ContractDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractDetailService = TestBed.get(ContractDetailService);
    expect(service).toBeTruthy();
  });
});
