import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TallyListPage } from './tally-list.page';

describe('TallyListPage', () => {
  let component: TallyListPage;
  let fixture: ComponentFixture<TallyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallyListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TallyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
