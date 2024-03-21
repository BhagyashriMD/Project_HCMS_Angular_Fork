import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersFeedbackDetailsComponent } from './trainers-feedback-details.component';

describe('TrainersFeedbackDetailsComponent', () => {
  let component: TrainersFeedbackDetailsComponent;
  let fixture: ComponentFixture<TrainersFeedbackDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainersFeedbackDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainersFeedbackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
