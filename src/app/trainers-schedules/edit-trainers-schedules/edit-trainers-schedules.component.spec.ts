import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainersSchedulesComponent } from './edit-trainers-schedules.component';

describe('EditTrainersSchedulesComponent', () => {
  let component: EditTrainersSchedulesComponent;
  let fixture: ComponentFixture<EditTrainersSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTrainersSchedulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTrainersSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
