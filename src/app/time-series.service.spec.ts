import { TestBed } from '@angular/core/testing';

import { TimeSeriesService } from './time-series.service';

describe('TimeSeriesService', () => {
  let service: TimeSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
