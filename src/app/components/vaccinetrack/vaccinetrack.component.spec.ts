import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinetrackComponent } from './vaccinetrack.component';

describe('VaccinetrackComponent', () => {
  let component: VaccinetrackComponent;
  let fixture: ComponentFixture<VaccinetrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinetrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinetrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
