import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersSchedulesDetailsComponent } from './trainers-schedules-details.component';

describe('TrainersSchedulesDetailsComponent', () => {
  let component: TrainersSchedulesDetailsComponent;
  let fixture: ComponentFixture<TrainersSchedulesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainersSchedulesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainersSchedulesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
