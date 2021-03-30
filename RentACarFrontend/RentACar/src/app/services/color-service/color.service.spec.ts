import { TestBed } from '@angular/core/testing';

import { ColorsService } from './color.service';

describe('ColorService', () => {
  let service: ColorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
