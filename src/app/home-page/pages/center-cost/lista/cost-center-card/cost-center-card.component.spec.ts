import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CostCenterCardComponent} from './cost-center-card.component';

describe('CostCenterCardComponent', () => {
  let component: CostCenterCardComponent;
  let fixture: ComponentFixture<CostCenterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CostCenterCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCenterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
