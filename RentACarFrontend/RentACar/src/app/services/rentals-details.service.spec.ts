import { TestBed } from '@angular/core/testing';

import { RentalsDetailsService } from './rentals-details.service';

describe('RentalsDetailsService', () => {
  let service: RentalsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
