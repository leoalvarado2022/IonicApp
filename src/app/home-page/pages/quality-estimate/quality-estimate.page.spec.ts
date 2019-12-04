import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QualityEstimatePage} from './quality-estimate.page';

describe('QualityEstimatePage', () => {
  let component: QualityEstimatePage;
  let fixture: ComponentFixture<QualityEstimatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QualityEstimatePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityEstimatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
