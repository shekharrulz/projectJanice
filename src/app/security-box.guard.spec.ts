import { TestBed, async, inject } from '@angular/core/testing';

import { SecurityBoxGuard } from './security-box.guard';

describe('SecurityBoxGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityBoxGuard]
    });
  });

  it('should ...', inject([SecurityBoxGuard], (guard: SecurityBoxGuard) => {
    expect(guard).toBeTruthy();
  }));
});
