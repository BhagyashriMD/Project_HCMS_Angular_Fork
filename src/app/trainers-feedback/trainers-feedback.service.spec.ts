import { TestBed } from '@angular/core/testing';

import { TrainersFeedbackService } from './trainers-feedback.service';

describe('TrainersFeedbackService', () => {
  let service: TrainersFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainersFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
