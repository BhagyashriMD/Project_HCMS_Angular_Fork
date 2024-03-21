import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApplicationStatusComponent } from './edit-application-status.component';

describe('EditApplicationStatusComponent', () => {
  let component: EditApplicationStatusComponent;
  let fixture: ComponentFixture<EditApplicationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditApplicationStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
