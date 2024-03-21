import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCandidateProfilesComponent } from './edit-candidate-profiles.component';

describe('EditCandidateProfilesComponent', () => {
  let component: EditCandidateProfilesComponent;
  let fixture: ComponentFixture<EditCandidateProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCandidateProfilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCandidateProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
