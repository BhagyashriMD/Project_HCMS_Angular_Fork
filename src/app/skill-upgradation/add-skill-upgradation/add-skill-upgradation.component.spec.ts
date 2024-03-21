import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillUpgradationComponent } from './add-skill-upgradation.component';

describe('AddSkillUpgradationComponent', () => {
  let component: AddSkillUpgradationComponent;
  let fixture: ComponentFixture<AddSkillUpgradationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSkillUpgradationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSkillUpgradationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
