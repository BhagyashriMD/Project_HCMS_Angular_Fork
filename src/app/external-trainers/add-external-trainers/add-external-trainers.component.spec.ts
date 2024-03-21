import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExternalTrainersComponent } from './add-external-trainers.component';

describe('AddExternalTrainersComponent', () => {
  let component: AddExternalTrainersComponent;
  let fixture: ComponentFixture<AddExternalTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExternalTrainersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddExternalTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
