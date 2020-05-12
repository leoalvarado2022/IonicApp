import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TratosListPage } from './tratos-list.page';

describe('TratosListPage', () => {
  let component: TratosListPage;
  let fixture: ComponentFixture<TratosListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratosListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TratosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
