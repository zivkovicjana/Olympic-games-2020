import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportIDisciplinaService {

  uri='http://localhost:4000'

  constructor(private http: HttpClient) { } 

  dodajSport(sport, disciplina, pol, vrsta, minIgraca, maxIgraca){
    const podaci = {
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      vrsta:vrsta,
      minIgraca:minIgraca,
      maxIgraca:maxIgraca
    }

    return this.http.post(`${this.uri}/sportovi_i_discipline/dodajSport`, podaci);
  }

  dohvSport(sport){
    const podaci = {
      sport:sport
    }

    return this.http.post(`${this.uri}/sportovi_i_discipline/dohvSport`, podaci);
  }

  dohvatiSveSportoveIDisc(){
    return this.http.get(`${this.uri}/sportovi_i_discipline/dohvatiSveSportoveIDisc`);
  }

  dohvatiSveSportoveIDiscMuski(){
    return this.http.get(`${this.uri}/sportovi_i_discipline/dohvatiSveSportoveIDiscMuski`);
  }

  dohvSveDiscZaSport(sport){
    const podaci = {
      sport:sport
    }

    return this.http.post(`${this.uri}/sportovi_i_discipline/dohvSveDiscZaSport`, podaci);
  }

  dohvSportIPol(sport){
    const podaci = {
      sport:sport
    }

    return this.http.post(`${this.uri}/sportovi_i_discipline/dohvSportIPol`, podaci);
  }
}
