import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillUpgradationDetailsComponent } from './skill-upgradation-details.component';

describe('SkillUpgradationDetailsComponent', () => {
  let component: SkillUpgradationDetailsComponent;
  let fixture: ComponentFixture<SkillUpgradationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillUpgradationDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillUpgradationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
