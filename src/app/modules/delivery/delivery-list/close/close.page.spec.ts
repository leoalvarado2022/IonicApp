import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ClosePage} from './close.page';

describe('ClosePage', () => {
  let component: ClosePage;
  let fixture: ComponentFixture<ClosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClosePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
