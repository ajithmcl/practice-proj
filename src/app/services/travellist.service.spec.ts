import { TestBed } from '@angular/core/testing';

import { TravellistService } from './travellist.service';

describe('TravellistService', () => {
  let service: TravellistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravellistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
