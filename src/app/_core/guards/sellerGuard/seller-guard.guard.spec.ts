import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { SellerGuardGuard } from './seller-guard.guard';

describe('SellerGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerGuardGuard]
    });
  });

  it('should ...', inject([SellerGuardGuard], (guard: SellerGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
