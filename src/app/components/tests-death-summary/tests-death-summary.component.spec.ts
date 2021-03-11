import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsDeathSummaryComponent } from './tests-death-summary.component';

describe('TestsDeathSummaryComponent', () => {
  let component: TestsDeathSummaryComponent;
  let fixture: ComponentFixture<TestsDeathSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsDeathSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsDeathSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
