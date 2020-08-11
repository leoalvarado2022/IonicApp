import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsumptionsPage } from './consumptions.page';

describe('ConsumptionsPage', () => {
  let component: ConsumptionsPage;
  let fixture: ComponentFixture<ConsumptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
