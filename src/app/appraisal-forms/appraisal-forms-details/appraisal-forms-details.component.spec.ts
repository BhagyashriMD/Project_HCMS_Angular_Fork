import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalFormsDetailsComponent } from './appraisal-forms-details.component';

describe('AppraisalFormsDetailsComponent', () => {
  let component: AppraisalFormsDetailsComponent;
  let fixture: ComponentFixture<AppraisalFormsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppraisalFormsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppraisalFormsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
