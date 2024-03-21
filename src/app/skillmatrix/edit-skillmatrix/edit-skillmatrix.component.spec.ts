import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSkillmatrixComponent } from './edit-skillmatrix.component';

describe('EditSkillmatrixComponent', () => {
  let component: EditSkillmatrixComponent;
  let fixture: ComponentFixture<EditSkillmatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSkillmatrixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSkillmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
