import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiderFormPage } from './lider-form.page';

describe('LiderFormPage', () => {
  let component: LiderFormPage;
  let fixture: ComponentFixture<LiderFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiderFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiderFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
