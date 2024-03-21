import { TestBed } from '@angular/core/testing';

import { LeaveApprovalsService } from './leave-approvals.service';

describe('LeaveApprovalsService', () => {
  let service: LeaveApprovalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveApprovalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
