import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainersFeedbackComponent } from './edit-trainers-feedback.component';

describe('EditTrainersFeedbackComponent', () => {
  let component: EditTrainersFeedbackComponent;
  let fixture: ComponentFixture<EditTrainersFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTrainersFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTrainersFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
