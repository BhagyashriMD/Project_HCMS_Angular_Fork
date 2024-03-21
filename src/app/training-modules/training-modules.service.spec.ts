import { TestBed } from '@angular/core/testing';

import { TrainingModulesService } from './training-modules.service';

describe('TrainingModulesService', () => {
  let service: TrainingModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
