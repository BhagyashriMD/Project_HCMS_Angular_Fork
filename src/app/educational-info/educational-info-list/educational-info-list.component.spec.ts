import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalInfoListComponent } from './educational-info-list.component';

describe('EducationalInfoListComponent', () => {
  let component: EducationalInfoListComponent;
  let fixture: ComponentFixture<EducationalInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalInfoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
