import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuadrillesListPage } from './quadrilles-list.page';

describe('QuadrillesListPage', () => {
  let component: QuadrillesListPage;
  let fixture: ComponentFixture<QuadrillesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadrillesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuadrillesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
