import { TestBed } from '@angular/core/testing';

import { SkillmatrixService } from './skillmatrix.service';

describe('SkillmatrixService', () => {
  let service: SkillmatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillmatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
