import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagersDetailsComponent } from './employee-managers-details.component';

describe('EmployeeManagersDetailsComponent', () => {
  let component: EmployeeManagersDetailsComponent;
  let fixture: ComponentFixture<EmployeeManagersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeManagersDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeManagersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
