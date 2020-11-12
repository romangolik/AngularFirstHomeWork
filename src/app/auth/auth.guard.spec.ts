import { TestBed } from '@angular/core/testing';

import { AuthorizationCheckGuard } from './authorization-check.guard';

describe('AuthorizationCheckGuard', () => {
  let guard: AuthorizationCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorizationCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
