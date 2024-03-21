import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaveApprovalsComponent } from './edit-leave-approvals.component';

describe('EditLeaveApprovalsComponent', () => {
  let component: EditLeaveApprovalsComponent;
  let fixture: ComponentFixture<EditLeaveApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLeaveApprovalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditLeaveApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
