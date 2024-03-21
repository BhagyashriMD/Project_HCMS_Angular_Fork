import { TestBed } from '@angular/core/testing';

import { SkillUpgradationService } from './skill-upgradation.service';

describe('SkillUpgradationService', () => {
  let service: SkillUpgradationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillUpgradationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
