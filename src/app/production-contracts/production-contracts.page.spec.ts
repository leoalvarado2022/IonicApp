import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionContractsPage } from './production-contracts.page';

describe('ProductionContractsPage', () => {
  let component: ProductionContractsPage;
  let fixture: ComponentFixture<ProductionContractsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionContractsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionContractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
