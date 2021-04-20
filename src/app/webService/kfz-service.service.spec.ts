import { TestBed } from '@angular/core/testing';

import { KfzServiceService } from './kfz-service.service';

describe('KfzServiceService', () => {
  let service: KfzServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KfzServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
