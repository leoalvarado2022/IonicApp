import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AddTratoPage} from './add-trato.page';

describe('AssociateWorkPage', () => {
  let component: AddTratoPage;
  let fixture: ComponentFixture<AddTratoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTratoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTratoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
