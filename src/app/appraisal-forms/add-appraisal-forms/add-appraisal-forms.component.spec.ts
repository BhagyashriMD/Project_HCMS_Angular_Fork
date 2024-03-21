import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppraisalFormsComponent } from './add-appraisal-forms.component';

describe('AddAppraisalFormsComponent', () => {
  let component: AddAppraisalFormsComponent;
  let fixture: ComponentFixture<AddAppraisalFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAppraisalFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAppraisalFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
