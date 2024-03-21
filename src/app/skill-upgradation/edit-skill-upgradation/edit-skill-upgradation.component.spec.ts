import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSkillUpgradationComponent } from './edit-skill-upgradation.component';

describe('EditSkillUpgradationComponent', () => {
  let component: EditSkillUpgradationComponent;
  let fixture: ComponentFixture<EditSkillUpgradationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSkillUpgradationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSkillUpgradationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
