import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProfilesListComponent } from './candidate-profiles-list.component';

describe('CandidateProfilesListComponent', () => {
  let component: CandidateProfilesListComponent;
  let fixture: ComponentFixture<CandidateProfilesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateProfilesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateProfilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
