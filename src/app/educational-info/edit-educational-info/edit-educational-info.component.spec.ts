import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationalInfoComponent } from './edit-educational-info.component';

describe('EditEducationalInfoComponent', () => {
  let component: EditEducationalInfoComponent;
  let fixture: ComponentFixture<EditEducationalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEducationalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEducationalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
