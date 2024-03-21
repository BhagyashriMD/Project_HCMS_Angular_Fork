import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypesDetailsComponent } from './leave-types-details.component';

describe('LeaveTypesDetailsComponent', () => {
  let component: LeaveTypesDetailsComponent;
  let fixture: ComponentFixture<LeaveTypesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveTypesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveTypesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
