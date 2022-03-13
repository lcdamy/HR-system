import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanApplicantComponent } from './human-applicant.component';

describe('HumanApplicantComponent', () => {
  let component: HumanApplicantComponent;
  let fixture: ComponentFixture<HumanApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanApplicantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
