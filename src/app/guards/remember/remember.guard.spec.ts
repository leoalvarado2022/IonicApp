import { TestBed, async, inject } from '@angular/core/testing';

import { RememberGuard } from './remember.guard';

describe('RememberGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RememberGuard]
    });
  });

  it('should ...', inject([RememberGuard], (guard: RememberGuard) => {
    expect(guard).toBeTruthy();
  }));
});
