import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NotesFormComponent} from './notes-form.component';

describe('NotesFormComponent', () => {
  let component: NotesFormComponent;
  let fixture: ComponentFixture<NotesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
