import { TestBed } from '@angular/core/testing';

import { CandidateProfilesService } from './candidate-profiles.service';

describe('CandidateProfilesService', () => {
  let service: CandidateProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
