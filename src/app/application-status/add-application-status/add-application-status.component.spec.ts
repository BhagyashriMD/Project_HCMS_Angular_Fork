import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicationStatusComponent } from './add-application-status.component';

describe('AddApplicationStatusComponent', () => {
  let component: AddApplicationStatusComponent;
  let fixture: ComponentFixture<AddApplicationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddApplicationStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
