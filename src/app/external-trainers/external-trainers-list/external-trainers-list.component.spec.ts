import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalTrainersListComponent } from './external-trainers-list.component';

describe('ExternalTrainersListComponent', () => {
  let component: ExternalTrainersListComponent;
  let fixture: ComponentFixture<ExternalTrainersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalTrainersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExternalTrainersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
