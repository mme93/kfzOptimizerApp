import { TestBed } from '@angular/core/testing';

import { UserIdentifaktionService } from './user-identifaktion.service';

describe('UserIdentifaktionService', () => {
  let service: UserIdentifaktionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIdentifaktionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
