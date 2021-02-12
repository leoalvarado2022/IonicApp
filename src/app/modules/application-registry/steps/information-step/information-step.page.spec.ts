import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformationStepPage } from './information-step.page';

describe('InformationStepPage', () => {
  let component: InformationStepPage;
  let fixture: ComponentFixture<InformationStepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationStepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformationStepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
