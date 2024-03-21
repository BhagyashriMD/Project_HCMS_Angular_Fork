import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppraisalFormsComponent } from './edit-appraisal-forms.component';

describe('EditAppraisalFormsComponent', () => {
  let component: EditAppraisalFormsComponent;
  let fixture: ComponentFixture<EditAppraisalFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAppraisalFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAppraisalFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
