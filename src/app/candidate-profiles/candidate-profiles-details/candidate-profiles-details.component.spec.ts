import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProfilesDetailsComponent } from './candidate-profiles-details.component';

describe('CandidateProfilesDetailsComponent', () => {
  let component: CandidateProfilesDetailsComponent;
  let fixture: ComponentFixture<CandidateProfilesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateProfilesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateProfilesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
