import { TestBed } from '@angular/core/testing';

import { OpenLoginFormGuard } from './open-login-form.guard';

describe('OpenLoginFormGuard', () => {
  let guard: OpenLoginFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OpenLoginFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
