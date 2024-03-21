import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeManagersComponent } from './edit-employee-managers.component';

describe('EditEmployeeManagersComponent', () => {
  let component: EditEmployeeManagersComponent;
  let fixture: ComponentFixture<EditEmployeeManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEmployeeManagersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEmployeeManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
