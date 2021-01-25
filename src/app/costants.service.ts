import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostantsService {

  private apiUrl = 'https://gestionepazienti.herokuapp.com/';  // 'http://localhost:1111/'

  constructor() { }

  // Ritorna l'indirizzo base dell'API
  getApiUrl() {
    return this.apiUrl;
  }

  // Ritorna l'indirizzo per la rotta specificata
  getApiRoute(route: string) {
    return this.apiUrl + route;
  }
}
