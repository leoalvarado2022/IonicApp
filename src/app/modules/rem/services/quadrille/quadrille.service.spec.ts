import {TestBed} from '@angular/core/testing';

import {QuadrilleService} from './quadrille.service';

describe('QuadrilleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuadrilleService = TestBed.get(QuadrilleService);
    expect(service).toBeTruthy();
  });
});
