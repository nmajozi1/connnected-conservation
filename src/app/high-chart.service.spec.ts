import { TestBed } from '@angular/core/testing';

import { HighChartService } from './high-chart.service';

describe('HighChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighChartService = TestBed.get(HighChartService);
    expect(service).toBeTruthy();
  });
});
