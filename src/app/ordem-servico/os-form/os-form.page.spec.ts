import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OsFormPage } from './os-form.page';

describe('OsFormPage', () => {
  let component: OsFormPage;
  let fixture: ComponentFixture<OsFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OsFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
