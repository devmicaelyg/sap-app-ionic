import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiderPage } from './lider.page';

describe('LiderPage', () => {
  let component: LiderPage;
  let fixture: ComponentFixture<LiderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
