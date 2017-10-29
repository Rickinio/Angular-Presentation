import { TestBed, inject } from '@angular/core/testing';

import { UserEditGuardService } from './user-edit-guard.service';

describe('UserEditGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserEditGuardService]
    });
  });

  it('should be created', inject([UserEditGuardService], (service: UserEditGuardService) => {
    expect(service).toBeTruthy();
  }));
});
