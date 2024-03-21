import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainersSchedulesComponent } from './add-trainers-schedules.component';

describe('AddTrainersSchedulesComponent', () => {
  let component: AddTrainersSchedulesComponent;
  let fixture: ComponentFixture<AddTrainersSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTrainersSchedulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTrainersSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
