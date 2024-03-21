import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainersFeedbackComponent } from './add-trainers-feedback.component';

describe('AddTrainersFeedbackComponent', () => {
  let component: AddTrainersFeedbackComponent;
  let fixture: ComponentFixture<AddTrainersFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTrainersFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTrainersFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
