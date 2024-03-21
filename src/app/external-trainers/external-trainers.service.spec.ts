import { TestBed } from '@angular/core/testing';

import { ExternalTrainersService } from './external-trainers.service';

describe('ExternalTrainersService', () => {
  let service: ExternalTrainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalTrainersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
