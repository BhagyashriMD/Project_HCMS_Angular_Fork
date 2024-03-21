import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillmatrixDetailsComponent } from './skillmatrix-details.component';

describe('SkillmatrixDetailsComponent', () => {
  let component: SkillmatrixDetailsComponent;
  let fixture: ComponentFixture<SkillmatrixDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillmatrixDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillmatrixDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
