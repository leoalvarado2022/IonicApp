import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCenterCostPage } from './add-center-cost.page';

describe('AddCenterCostPage', () => {
  let component: AddCenterCostPage;
  let fixture: ComponentFixture<AddCenterCostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCenterCostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCenterCostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
