import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { HomeService, HourRange, Room } from 'src/app/home.service';
import { format } from 'date-fns'
import { it } from 'date-fns/locale'

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.page.html',
  styleUrls: ['./add-booking.page.scss'],
})
export class AddBookingPage implements OnInit {

  @Input() selectedRoom: Room;
  @Input() selectedHour: HourRange;
  @Input() date: string[];
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
      this.dateString.push(format(new Date(this.date[i]), 'EEEE dd MMMM', { locale: it }));
    }
  }

  addBooking() {
    if (this.physioName && this.patientName) {
      const startDates = [];
      const endDates = [];
      for (let i = 0; i < this.date.length; i++) {
        startDates.push(this.makeGmtDate(new Date(this.date[i]), this.selectedHour.startTime));
        endDates.push(this.makeGmtDate(new Date(this.date[i]), this.selectedHour.endTime));
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
    } else if (!this.physioName && this.patientName) {
      this.presentToast('Nome Fisioterapista mancante')
    } else if (!this.patientName && this.physioName) {
      this.presentToast('Nome Paziente mancante')
    } else if (!this.patientName && !this.physioName) {
      this.presentToast('Nome Fisioterapista e nome Paziente mancanti')
    }
  }

  makeGmtDate(date: Date, time: string) {
    const gmtDate = new Date(new Date(date).toLocaleDateString('en-US') + ' ' + time);
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
