import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationalInfoComponent } from './add-educational-info.component';

describe('AddEducationalInfoComponent', () => {
  let component: AddEducationalInfoComponent;
  let fixture: ComponentFixture<AddEducationalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEducationalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEducationalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
