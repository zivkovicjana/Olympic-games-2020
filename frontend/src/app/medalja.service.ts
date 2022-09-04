import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedaljaService {
  
  uri='http://localhost:4000'

  constructor(private http: HttpClient) { }

  dohvSveMedalje(){
    return this.http.get(`${this.uri}/medalje/dohvSveMedalje`);
  }

  povecajZlatne(zemlja, brZlatnih, ukupno){
    const podaci = {
      zemlja:zemlja,
      brZlatnih:brZlatnih,
      ukupno:ukupno
    }

    return this.http.post(`${this.uri}/medalje/povecajZlatne`, podaci);
  }

  povecajSrebrne(zemlja, brSrebrnih, ukupno){
    const podaci = {
      zemlja:zemlja,
      brSrebrnih:brSrebrnih,
      ukupno:ukupno
    }

    return this.http.post(`${this.uri}/medalje/povecajSrebrne`, podaci);
  }

  povecajBronzane(zemlja, brBronzanih, ukupno){
    const podaci = {
      zemlja:zemlja,
      brBronzanih:brBronzanih,
      ukupno:ukupno
    }

    return this.http.post(`${this.uri}/medalje/povecajBronzane`, podaci);
  }

  dohvSveMedaljeZaDrzavu(zemlja){
    const podaci={
      zemlja:zemlja
    }

    return this.http.post(`${this.uri}/medalje/dohvSveMedaljeZaDrzavu`, podaci);
  }
}
