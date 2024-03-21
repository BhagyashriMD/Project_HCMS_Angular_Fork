import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillmatrixListComponent } from './skillmatrix-list.component';

describe('SkillmatrixListComponent', () => {
  let component: SkillmatrixListComponent;
  let fixture: ComponentFixture<SkillmatrixListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillmatrixListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillmatrixListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
