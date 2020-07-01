import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MachineryListPage } from './machinery-list.page';

describe('MachineryListPage', () => {
  let component: MachineryListPage;
  let fixture: ComponentFixture<MachineryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MachineryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
