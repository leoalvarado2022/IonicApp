import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherStepPage } from './weather-step.page';

describe('WeatherStepPage', () => {
  let component: WeatherStepPage;
  let fixture: ComponentFixture<WeatherStepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherStepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherStepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
