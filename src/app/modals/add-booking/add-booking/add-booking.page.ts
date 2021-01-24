import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { HomeService, HourRange, Room } from 'src/app/home.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.page.html',
  styleUrls: ['./add-booking.page.scss'],
})
export class AddBookingPage implements OnInit {

  @Input() selectedRoom: Room;
  @Input() selectedHour: HourRange;
  @Input() selectedDate: Date;
  @Input() physioName: string;
  dateString: string;
  patientName: string;

  constructor(
    private modalController: ModalController,
    private homeService: HomeService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.dateString = new Date(this.selectedDate).toLocaleString('it-IT', { 'weekday': 'long', 'month': 'long', 'day': '2-digit' });
  }

  addBooking() {
    const startDate = this.makeGmtDate(this.selectedDate, this.selectedHour.startTime);
    const endDate = this.makeGmtDate(this.selectedDate, this.selectedHour.endTime);

    const bookingBody = {
      roomId: this.selectedRoom.roomId,
      patientName: this.patientName,
      physioName: this.physioName,
      startDate: startDate,
      endDate: endDate
    }

    this.homeService.addBooking(bookingBody).then(() => {
      this.presentToast('Appuntamento aggiunto')
      this.onModalDismiss();
    })
      .catch(() => {
        this.presentToast('Errore aggiunta appuntamento')
      })
  }

  makeGmtDate(date: Date, time: string) {
    const gmtDate = new Date(date.toLocaleDateString('en-US') + ' ' + time);
    gmtDate.setTime(gmtDate.getTime() + 60 * 60 * 1000);
    return gmtDate
  }

  onModalDismiss() {
    this.modalController.dismiss();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
