import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredPage } from './expired.page';

describe('ExpiredPage', () => {
  let component: ExpiredPage;
  let fixture: ComponentFixture<ExpiredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
