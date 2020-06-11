import { TestBed } from '@angular/core/testing';

import { BananaService } from './banana.service';

describe('BananaService', () => {
  let service: BananaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BananaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
