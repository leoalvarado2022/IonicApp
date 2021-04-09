import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {DeliveryPaymentPage} from './delivery-payment.page';

describe('DeliveryPaymentPage', () => {
  let component: DeliveryPaymentPage;
  let fixture: ComponentFixture<DeliveryPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryPaymentPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
