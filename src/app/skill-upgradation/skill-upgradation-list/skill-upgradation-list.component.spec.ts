import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillUpgradationListComponent } from './skill-upgradation-list.component';

describe('SkillUpgradationListComponent', () => {
  let component: SkillUpgradationListComponent;
  let fixture: ComponentFixture<SkillUpgradationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillUpgradationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillUpgradationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
