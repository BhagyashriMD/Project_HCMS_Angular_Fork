import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypesListComponent } from './leave-types-list.component';

describe('LeaveTypesListComponent', () => {
  let component: LeaveTypesListComponent;
  let fixture: ComponentFixture<LeaveTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveTypesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
