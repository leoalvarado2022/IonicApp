import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemWorkersPage } from './rem-workers.page';

describe('RemWorkersPage', () => {
  let component: RemWorkersPage;
  let fixture: ComponentFixture<RemWorkersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemWorkersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemWorkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
