import { TestBed } from '@angular/core/testing';

import { DatashringService } from './datashring.service';

describe('DatashringService', () => {
  let service: DatashringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatashringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
