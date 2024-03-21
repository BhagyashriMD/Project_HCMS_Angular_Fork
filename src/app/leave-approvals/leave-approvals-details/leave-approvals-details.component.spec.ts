import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApprovalsDetailsComponent } from './leave-approvals-details.component';

describe('LeaveApprovalsDetailsComponent', () => {
  let component: LeaveApprovalsDetailsComponent;
  let fixture: ComponentFixture<LeaveApprovalsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveApprovalsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveApprovalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
