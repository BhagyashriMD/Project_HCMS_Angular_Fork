import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaveTypesComponent } from './edit-leave-types.component';

describe('EditLeaveTypesComponent', () => {
  let component: EditLeaveTypesComponent;
  let fixture: ComponentFixture<EditLeaveTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLeaveTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditLeaveTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
