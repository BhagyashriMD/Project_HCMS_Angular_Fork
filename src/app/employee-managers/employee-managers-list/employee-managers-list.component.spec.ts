import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagersListComponent } from './employee-managers-list.component';

describe('EmployeeManagersListComponent', () => {
  let component: EmployeeManagersListComponent;
  let fixture: ComponentFixture<EmployeeManagersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeManagersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeManagersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
