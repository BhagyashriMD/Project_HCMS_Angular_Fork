import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersSchedulesListComponent } from './trainers-schedules-list.component';

describe('TrainersSchedulesListComponent', () => {
  let component: TrainersSchedulesListComponent;
  let fixture: ComponentFixture<TrainersSchedulesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainersSchedulesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainersSchedulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
