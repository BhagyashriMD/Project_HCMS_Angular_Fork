import { TestBed } from '@angular/core/testing';

import { AppraisalFormsService } from './appraisal-forms.service';

describe('AppraisalFormsService', () => {
  let service: AppraisalFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppraisalFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
