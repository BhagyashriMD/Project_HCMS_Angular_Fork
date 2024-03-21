import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVacanciesComponent } from './edit-vacancies.component';

describe('EditVacanciesComponent', () => {
  let component: EditVacanciesComponent;
  let fixture: ComponentFixture<EditVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVacanciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
