import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestsDetailsComponent } from './leave-requests-details.component';

describe('LeaveRequestsDetailsComponent', () => {
  let component: LeaveRequestsDetailsComponent;
  let fixture: ComponentFixture<LeaveRequestsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveRequestsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveRequestsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
