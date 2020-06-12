import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {TallyFormComponent} from './tally-form.component';

describe('TallyFormComponent', () => {
  let component: TallyFormComponent;
  let fixture: ComponentFixture<TallyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TallyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
