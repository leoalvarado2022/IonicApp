import { TestBed, async, inject } from '@angular/core/testing';

import { InternetGuard } from './internet.guard';

describe('InternetGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternetGuard]
    });
  });

  it('should ...', inject([InternetGuard], (guard: InternetGuard) => {
    expect(guard).toBeTruthy();
  }));
});
