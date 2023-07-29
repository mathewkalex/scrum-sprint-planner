import { TestBed } from '@angular/core/testing';

import { SrumService } from './srum.service';

describe('SrumService', () => {
  let service: SrumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
