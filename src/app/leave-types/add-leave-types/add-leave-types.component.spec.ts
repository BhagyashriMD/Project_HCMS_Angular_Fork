import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveTypesComponent } from './add-leave-types.component';

describe('AddLeaveTypesComponent', () => {
  let component: AddLeaveTypesComponent;
  let fixture: ComponentFixture<AddLeaveTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLeaveTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLeaveTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
