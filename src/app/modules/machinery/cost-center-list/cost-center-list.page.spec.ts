import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CostCenterListPage } from './cost-center-list.page';

describe('CostCenterListPage', () => {
  let component: CostCenterListPage;
  let fixture: ComponentFixture<CostCenterListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostCenterListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CostCenterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
