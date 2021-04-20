import { TestBed } from '@angular/core/testing';

import { CaradminastrionService } from './caradminastrion.service';

describe('CaradminastrionService', () => {
  let service: CaradminastrionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaradminastrionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
