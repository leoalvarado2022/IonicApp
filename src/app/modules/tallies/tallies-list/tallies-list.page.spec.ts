import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TalliesListPage } from './tallies-list.page';

describe('TalliesListPage', () => {
  let component: TalliesListPage;
  let fixture: ComponentFixture<TalliesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalliesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TalliesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
