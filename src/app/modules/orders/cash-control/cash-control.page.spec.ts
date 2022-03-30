import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CashControlPage } from './cash-control.page';

describe('CashControlPage', () => {
  let component: CashControlPage;
  let fixture: ComponentFixture<CashControlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashControlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CashControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
