import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportService { 

  uri='http://localhost:4000'
 
  constructor(private http: HttpClient) { }

  dohvSveSportove(){
    return this.http.get(`${this.uri}/sportovi/dohvSveSportove`);
  }

  dodajSport(sport, vrsta){
    const podaci={
      sport:sport,
      vrsta:vrsta
    }

    return this.http.post(`${this.uri}/sportovi/dodajSport`, podaci);
  }

  dohvPoSportu(sport){
    const podaci={
      sport:sport
    }

    return this.http.post(`${this.uri}/sportovi/dohvPoSportu`, podaci);
  }
}
