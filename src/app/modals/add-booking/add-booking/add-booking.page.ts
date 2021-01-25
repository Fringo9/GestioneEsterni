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
  @Input() date: Date[];
  @Input() physioName: string;
  dateString: string[] = [];
  patientName: string;

  constructor(
    private modalController: ModalController,
    private homeService: HomeService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.date.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    for (let i = 0; i < this.date.length; i++) {
      this.dateString.push(new Date(this.date[i]).toLocaleString('it-IT', { 'weekday': 'long', 'month': 'long', 'day': '2-digit' }));
    }
  }

  addBooking() {
    const startDates = [];
    const endDates = [];
    for (let i = 0; i < this.date.length; i++) {
      startDates.push(this.makeGmtDate(this.date[i], this.selectedHour.startTime));
      endDates.push(this.makeGmtDate(this.date[i], this.selectedHour.endTime));
    }

    const bookingBody = {
      roomId: this.selectedRoom.roomId,
      patientName: this.patientName,
      physioName: this.physioName,
      startDatesArray: startDates,
      endDatesArray: endDates
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
    console.log(date);
    const gmtDate = new Date(new Date(date).toLocaleDateString('en-US') + ' ' + time);
    gmtDate.setTime(gmtDate.getTime() + 60 * 60 * 1000);
    console.log('gmtDate')
    console.log(gmtDate)
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
