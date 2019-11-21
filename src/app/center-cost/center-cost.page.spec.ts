import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CenterCostPage} from './center-cost.page';

describe('CenterCostPage', () => {
  let component: CenterCostPage;
  let fixture: ComponentFixture<CenterCostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CenterCostPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterCostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
