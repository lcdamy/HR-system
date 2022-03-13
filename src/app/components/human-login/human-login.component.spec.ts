import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanLoginComponent } from './human-login.component';

describe('HumanLoginComponent', () => {
  let component: HumanLoginComponent;
  let fixture: ComponentFixture<HumanLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
