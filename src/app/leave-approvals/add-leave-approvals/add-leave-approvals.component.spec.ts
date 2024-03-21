import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveApprovalsComponent } from './add-leave-approvals.component';

describe('AddLeaveApprovalsComponent', () => {
  let component: AddLeaveApprovalsComponent;
  let fixture: ComponentFixture<AddLeaveApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLeaveApprovalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLeaveApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
