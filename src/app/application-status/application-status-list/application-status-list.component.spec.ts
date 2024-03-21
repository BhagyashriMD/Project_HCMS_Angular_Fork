import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationStatusListComponent } from './application-status-list.component';

describe('ApplicationStatusListComponent', () => {
  let component: ApplicationStatusListComponent;
  let fixture: ComponentFixture<ApplicationStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationStatusListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
