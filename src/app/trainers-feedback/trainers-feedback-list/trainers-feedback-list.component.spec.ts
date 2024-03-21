import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersFeedbackListComponent } from './trainers-feedback-list.component';

describe('TrainersFeedbackListComponent', () => {
  let component: TrainersFeedbackListComponent;
  let fixture: ComponentFixture<TrainersFeedbackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainersFeedbackListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainersFeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
