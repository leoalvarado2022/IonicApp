import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QualityEstimateFormComponent} from './quality-estimate-form.component';

describe('QualityEstimateFormComponent', () => {
  let component: QualityEstimateFormComponent;
  let fixture: ComponentFixture<QualityEstimateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QualityEstimateFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityEstimateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
