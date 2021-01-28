import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBookingModalPage } from './add-booking-modal.page';

describe('AddBookingModalPage', () => {
  let component: AddBookingModalPage;
  let fixture: ComponentFixture<AddBookingModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookingModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBookingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
