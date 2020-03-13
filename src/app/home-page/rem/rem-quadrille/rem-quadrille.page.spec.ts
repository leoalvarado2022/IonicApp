import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RemQuadrillePage} from './rem-quadrille.page';

describe('RemQuadrillePage', () => {
  let component: RemQuadrillePage;
  let fixture: ComponentFixture<RemQuadrillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemQuadrillePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemQuadrillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
