import { TestBed } from '@angular/core/testing';

import { TrainersSchedulesService } from './trainers-schedules.service';

describe('TrainersSchedulesService', () => {
  let service: TrainersSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainersSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
