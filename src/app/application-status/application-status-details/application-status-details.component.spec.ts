import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStatusDetailsComponent } from './application-status-details.component';

describe('ApplicationStatusDetailsComponent', () => {
  let component: ApplicationStatusDetailsComponent;
  let fixture: ComponentFixture<ApplicationStatusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationStatusDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationStatusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
