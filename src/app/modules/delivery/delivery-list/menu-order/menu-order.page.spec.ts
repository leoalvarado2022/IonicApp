import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {MenuOrderPage} from './menu-order.page';

describe('AcceptedPage', () => {
  let component: MenuOrderPage;
  let fixture: ComponentFixture<MenuOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOrderPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
