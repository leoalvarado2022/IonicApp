import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperationStepPage } from './operation-step.page';

describe('OperationStepPage', () => {
  let component: OperationStepPage;
  let fixture: ComponentFixture<OperationStepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationStepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperationStepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
