import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Appointment, dayRoomOrdered, HomeService, Physio, Room } from '../home.service';
import * as moment from 'moment'
import { AddBookingModalPage } from '../add-booking-modal/add-booking-modal.page';
import { format } from 'date-fns'
import { it } from 'date-fns/locale'
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  rooms: Room[];
  physio: Physio[];
  selectedPhysio: Physio;
  appointments: Appointment[] = [];
  filterString: string;
  physioRooms = [];
  dayRoomOrdered: dayRoomOrdered[] = [];
  weekView: boolean = false;

  constructor(
    public homeService: HomeService,
    private modalController: ModalController,
    public toastController: ToastController,
    public alertController: AlertController,
    private spinner: SpinnerService) {
    moment.locale('it-IT')
  }

  // Modale di prenotazione
  async presentAddBookingModal() {
    const modal = await this.modalController.create({
      component: AddBookingModalPage,
      cssClass: 'add-booking',
      componentProps: {
        'appointments': this.appointments,
        'physio': this.physio,
        'selectedPhysio': this.selectedPhysio,
        'rooms': this.rooms
      }
    });

    modal.onDidDismiss()
      .then((data) => {
        console.log('Modale Prenotazione dismessa')

        // Se nella modale ho cambiato fisio, lo cambio anche qui
        if (data.data.id !== this.selectedPhysio.id) {
          this.selectedPhysio = data.data;
        }

        this.getAppointmentsData();
      });

    return await modal.present();
  }

  // Alert di aggiunta Fisio
  async presentAlertAddPhysio() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert',
      header: 'Aggiungi Fisioterapista',
      message: 'Inserisci il nome',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nome Fisioterapista'
        }],
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel'
        }, {
          text: 'Salva',
          handler: data => {
            if (data.name) {
              this.addPhysio(data.name);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  // Inizializzazione Toast
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  // Opzioni del Popover del select del Fisio
  customPopoverOptions: any = {
    cssClass: 'custom-popover'
  };

  ngOnInit() {
    // Scarico appuntamenti
    this.getAppointmentsData();

    // Popolo lista delle stanze
    this.rooms = this.homeService.getRooms();
  }

  // Ottengo fisio e appuntamenti futuri ordinandoli
  getAppointmentsData() {
    this.spinner.create()

    // Ottengo lista dei Fisio
    this.homeService.getPhysio().then(res => {
      this.physio = res;
      this.physio.sort((a, b) => a.name.localeCompare(b.name));
      if (!this.selectedPhysio) {
        this.selectedPhysio = this.physio[0];
      }

      // Ottengo gli appuntamenti
      this.homeService.getAppointments().then(res => {
        this.appointments = [];
        const now = format(new Date(), 'M/dd/y HH:mm', { locale: it });

        // Tengo solo gli appuntamenti nel futuro (considerando al minuto)
        for (let i = 0; i < res.length; i++) {
          const dateFormatted = format(new Date(res[i].day + ' ' + res[i].startTime), 'M/dd/y HH:mm', { locale: it });
          if (dateFormatted > now) {
            this.appointments.push(res[i]);
          }
        }

        // Ordino gli appuntamenti
        this.appointments.sort((a, b) => new Date(a.day + ' ' + a.startTime).getTime() - new Date(b.day + ' ' + b.startTime).getTime());
        console.log(this.appointments);

        // Popolo array physioRooms con tutti gli appuntamenti divisi per data
        this.physioRooms = this.homeService.getPhysioDate(this.appointments);

        // Popolo array dayRoomOrdered con tutti gli appuntamenti divisi per data e lettino
        this.getDayRoomOrdered(this.appointments);

        this.spinner.dismiss();
      })
    })
  }

  // Eliminazione appuntamento
  removeAppointment(appointmentId: number) {
    this.homeService.removeAppointment(appointmentId).then(() => {
      this.getAppointmentsData();
      this.presentToast('Appuntamento cancellato');
    }).catch(() => {
      this.presentToast("Errore nella cancellazione dell'appuntamento");
    })
  }

  // Aggiungo Fisioterapista
  addPhysio(name: string) {
    this.homeService.addPhysio(name).then(() => {
      this.presentToast('Fisioterapista ' + name + ' aggiunto');
      this.getAppointmentsData();
    }).catch(() => {
      this.presentToast("Errore nell'aggiunta del Fisioterapista");
    })
  }

  // Ottengo il nome della stanza dall'ID
  getRoomFromId(roomId: number) {
    for (let i = 0; i < this.rooms.length; i++) {
      if (roomId === this.rooms[i].roomId) {
        return this.rooms[i].roomName;
      }
    }
  }

  // Popolo array dayRoomOrdered con tutti gli appuntamenti divisi per data e lettino
  async getDayRoomOrdered(appointments: Appointment[]) {
    this.dayRoomOrdered = [];

    for (let i = 0; i < appointments.length; i++) {
      // Creo la struttura dell'appuntamento
      const appointmentToAdd: dayRoomOrdered = {
        date: this.homeService.getDayRightFormat(appointments[i].day, appointments[i].startTime),
        rooms: [{
          roomId: appointments[i].roomId,
          roomName: this.getRoomFromId(appointments[i].roomId),
          appointments: [{
            appointmentId: appointments[i].appointmentId,
            patientName: appointments[i].patientName,
            physioName: appointments[i].physioName,
            startTime: appointments[i].startTime,
            endTime: appointments[i].endTime,
            day: appointments[i].day
          }]
        }]
      }

      if (this.dayRoomOrdered.length === 0) {
        // Aggiungo l'appuntamento all'array
        this.dayRoomOrdered.push(appointmentToAdd);

      } else if (this.dayRoomOrdered.find(x => x.date === this.homeService.getDayRightFormat(appointments[i].day, appointments[i].startTime))) {

        // Trovo l'indice dell'appuntamento con questa data
        const sameDate = this.dayRoomOrdered.findIndex(x => x.date === this.homeService.getDayRightFormat(appointments[i].day, appointments[i].startTime));

        if (this.dayRoomOrdered[sameDate].rooms.find(x => x.roomId === appointments[i].roomId)) {

          // Trovo l'indice dell'appuntamento con questa stanza
          const sameRoom = this.dayRoomOrdered[sameDate].rooms.findIndex(x => x.roomId === appointments[i].roomId);

          // Aggiungo l'appuntamento all'array
          this.dayRoomOrdered[sameDate].rooms[sameRoom].appointments.push(appointmentToAdd.rooms[0].appointments[0])
        } else {
          // Aggiungo l'appuntamento all'array
          this.dayRoomOrdered[sameDate].rooms.push(appointmentToAdd.rooms[0])
        }
      } else {

        // Aggiungo l'appuntamento all'array
        this.dayRoomOrdered.push(appointmentToAdd);
      }
    }

    // Salvo dayRoomOrdered in localstorage
    this.homeService.setDayRoomOrdered(this.dayRoomOrdered);
  }

  // Attiva/Disattiva la vista divisa per data
  toggleWeekView() {
    this.weekView = !this.weekView;
  }
}
