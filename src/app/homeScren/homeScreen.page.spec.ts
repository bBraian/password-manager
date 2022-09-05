import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { homeScreen } from './homeScreen.page';

describe('homeScreen', () => {
  let component: homeScreen;
  let fixture: ComponentFixture<homeScreen>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ homeScreen ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(homeScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
