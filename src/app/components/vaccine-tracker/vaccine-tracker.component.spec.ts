import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineTrackerComponent } from './vaccine-tracker.component';

describe('VaccineTrackerComponent', () => {
  let component: VaccineTrackerComponent;
  let fixture: ComponentFixture<VaccineTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
