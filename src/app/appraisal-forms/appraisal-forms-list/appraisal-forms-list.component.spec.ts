import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisalFormsListComponent } from './appraisal-forms-list.component';

describe('AppraisalFormsListComponent', () => {
  let component: AppraisalFormsListComponent;
  let fixture: ComponentFixture<AppraisalFormsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppraisalFormsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppraisalFormsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
