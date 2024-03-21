import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExternalTrainersComponent } from './edit-external-trainers.component';

describe('EditExternalTrainersComponent', () => {
  let component: EditExternalTrainersComponent;
  let fixture: ComponentFixture<EditExternalTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditExternalTrainersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditExternalTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
