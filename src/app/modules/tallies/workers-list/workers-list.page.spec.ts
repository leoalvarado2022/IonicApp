import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkersListPage } from './workers-list.page';

describe('WorkersListPage', () => {
  let component: WorkersListPage;
  let fixture: ComponentFixture<WorkersListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
