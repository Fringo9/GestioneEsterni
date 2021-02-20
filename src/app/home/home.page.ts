import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Appointment, HomeService, Physio, Room } from '../home.service';
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

  // Opzioni del Popover
  customPopoverOptions: any = {
    cssClass: 'custom-popover'
  };

  ngOnInit() {
    this.getAppointmentsData();
    this.rooms = this.homeService.getRooms(); // Popolo lista delle stanze
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

        this.appointments.sort((a, b) => new Date(a.day + ' ' + a.startTime).getTime() - new Date(b.day + ' ' + b.startTime).getTime());
        this.spinner.dismiss();
        console.log(this.appointments);
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

  // Converto la data in nome del giorno oppure giorno/mese
  getDayRightFormat(day: string, hour: string, type?: string) {
    if (type === 'weekDay') {
      return (format(new Date(day + ' ' + hour), 'EEEE', { locale: it }));
    } else {
      return (format(new Date(day + ' ' + hour), 'd MMMM', { locale: it }));
    }
  }

  // Converto l'ora in ora/minuti
  getHourRightFormat(day: string, hour: string) {
    return (format(new Date(day + ' ' + hour), 'k:mm'));
  }

}
