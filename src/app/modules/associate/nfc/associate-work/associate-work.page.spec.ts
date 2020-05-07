import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AssociateWorkPage} from './associate-work.page';

describe('AssociateWorkPage', () => {
  let component: AssociateWorkPage;
  let fixture: ComponentFixture<AssociateWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateWorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssociateWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
