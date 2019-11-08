import { TestBed, async, inject } from '@angular/core/testing';

import { InitSesionGuard } from './init-sesion.guard';

describe('InitSesionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitSesionGuard]
    });
  });

  it('should ...', inject([InitSesionGuard], (guard: InitSesionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
