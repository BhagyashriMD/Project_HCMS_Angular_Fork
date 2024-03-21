import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingModulesDetailsComponent } from './training-modules-details.component';

describe('TrainingModulesDetailsComponent', () => {
  let component: TrainingModulesDetailsComponent;
  let fixture: ComponentFixture<TrainingModulesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingModulesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingModulesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
