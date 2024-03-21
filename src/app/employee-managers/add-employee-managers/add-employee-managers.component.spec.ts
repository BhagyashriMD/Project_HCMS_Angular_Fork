import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeManagersComponent } from './add-employee-managers.component';

describe('AddEmployeeManagersComponent', () => {
  let component: AddEmployeeManagersComponent;
  let fixture: ComponentFixture<AddEmployeeManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmployeeManagersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmployeeManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
