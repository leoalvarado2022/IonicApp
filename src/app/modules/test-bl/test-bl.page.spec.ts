import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestBlPage } from './test-bl.page';

describe('TestBlPage', () => {
  let component: TestBlPage;
  let fixture: ComponentFixture<TestBlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestBlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
