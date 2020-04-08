import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QualityEstimateItemComponent} from './quality-estimate-item.component';

describe('QualityEstimateItemComponent', () => {
  let component: QualityEstimateItemComponent;
  let fixture: ComponentFixture<QualityEstimateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QualityEstimateItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityEstimateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
