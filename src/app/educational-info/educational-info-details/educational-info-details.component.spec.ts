import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalInfoDetailsComponent } from './educational-info-details.component';

describe('EducationalInfoDetailsComponent', () => {
  let component: EducationalInfoDetailsComponent;
  let fixture: ComponentFixture<EducationalInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalInfoDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
