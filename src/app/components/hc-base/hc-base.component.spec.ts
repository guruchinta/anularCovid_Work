import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcBaseComponent } from './hc-base.component';

describe('HcBaseComponent', () => {
  let component: HcBaseComponent;
  let fixture: ComponentFixture<HcBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
