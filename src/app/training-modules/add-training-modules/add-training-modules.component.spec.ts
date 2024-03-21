import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingModulesComponent } from './add-training-modules.component';

describe('AddTrainingModulesComponent', () => {
  let component: AddTrainingModulesComponent;
  let fixture: ComponentFixture<AddTrainingModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTrainingModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTrainingModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
