import { TestBed } from '@angular/core/testing';

import { EmployeeManagersService } from './employee-managers.service';

describe('EmployeeManagersService', () => {
  let service: EmployeeManagersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeManagersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
