import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalTrainersDetailsComponent } from './external-trainers-details.component';

describe('ExternalTrainersDetailsComponent', () => {
  let component: ExternalTrainersDetailsComponent;
  let fixture: ComponentFixture<ExternalTrainersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalTrainersDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExternalTrainersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
