import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainingModulesComponent } from './edit-training-modules.component';

describe('EditTrainingModulesComponent', () => {
  let component: EditTrainingModulesComponent;
  let fixture: ComponentFixture<EditTrainingModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTrainingModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTrainingModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
