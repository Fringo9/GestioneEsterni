import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private loadingCtrl: LoadingController) { }

  // Crea un istanza dello spinner
  async create() {
    const message = 'Caricamento...';
    const spinner = await this.loadingCtrl.create({
      message: `<div class="loader">`,
      cssClass: 'spinner',
      spinner: null,
      duration: 10000 // Per evitare problemi imposto comunque che dopo 10 secondi si chiuderebbe
    });

    spinner.present();
    return spinner;
  }

  // Funzioni di utility per gestire la corretta rimozione degli spinner presenti.
  // Wrapper di setTimeout fatto a promise per gestire l'await
  private awaitableTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // Nasconde lo spinner, verificando di chiuderli tutti
  async dismiss() {
    try {
      while (await this.loadingCtrl.getTop() !== undefined) {
        // Per evitare loop infiniti scelto di attendere 200ms ogni volta che provo a rimuovere uno spinner
        await this.awaitableTimeout(200);
        await this.loadingCtrl.dismiss();
      }
    } catch (e) {
      console.log("multiple spinner dismiss");
    }
  }
}