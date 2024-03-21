import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillmatrixComponent } from './add-skillmatrix.component';

describe('AddSkillmatrixComponent', () => {
  let component: AddSkillmatrixComponent;
  let fixture: ComponentFixture<AddSkillmatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSkillmatrixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSkillmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
