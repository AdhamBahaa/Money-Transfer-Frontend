import { TestBed } from '@angular/core/testing';

import { InActiveService } from './in-active.service';

describe('InActiveService', () => {
  let service: InActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InActiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
