import { TestBed } from '@angular/core/testing';

import { CostantsService } from './costants.service';

describe('CostantsService', () => {
  let service: CostantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
