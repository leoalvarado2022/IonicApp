import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractFormPage } from './contract-form.page';

describe('ContractFormPage', () => {
  let component: ContractFormPage;
  let fixture: ComponentFixture<ContractFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
