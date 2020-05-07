import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {TestingIconsPage} from './testing-icons.page';

describe('TestingIconsPage', () => {
  let component: TestingIconsPage;
  let fixture: ComponentFixture<TestingIconsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingIconsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestingIconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
