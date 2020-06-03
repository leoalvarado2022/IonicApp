import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TratosScannedPage } from './tratos-scanned.page';

describe('TratosScannedPage', () => {
  let component: TratosScannedPage;
  let fixture: ComponentFixture<TratosScannedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratosScannedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TratosScannedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
