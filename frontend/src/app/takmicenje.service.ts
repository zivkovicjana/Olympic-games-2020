import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TakmicenjeService {
  
  uri='http://localhost:4000'

  constructor(private http: HttpClient) { }

  dodajTakmicenje(sport, disciplina, format, pol, vrsta, datumP, vremeP, datumK, vremeK, lokacija, ucesnici, delegati){
    const podaci = {
      sport:sport,
      disciplina:disciplina,
      format:format,
      pol:pol,
      vrsta:vrsta,
      datumP:datumP,
      vremeP:vremeP,
      datumK:datumK,
      vremeK:vremeK,
      lokacija:lokacija,
      ucesnici:ucesnici,
      delegati:delegati
    }

    return this.http.post(`${this.uri}/takmicenja/dodajTakmicenje`, podaci);
  }

  dohvSportDisciplinaPol(sport, disciplina, pol){
    const podaci = {
      sport:sport,
      disciplina:disciplina,
      pol:pol
    }

    return this.http.post(`${this.uri}/takmicenja/dohvSportDisciplinaPol`, podaci);
  }

  dohvSve(){
    return this.http.get(`${this.uri}/takmicenja/dohvSve`);
  }

  dohvBrojDelegata(delegat){
    const podaci = {
      delegat:delegat
    }
    return this.http.post(`${this.uri}/takmicenja/dohvBrojDelegata`, podaci);
  }

  postaviVremePocetka(sport, disciplina, pol, datumP, vremeP){
    const podaci = {
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      datumP:datumP,
      vremeP:vremeP
    }

    return this.http.post(`${this.uri}/takmicenja/postaviVremePocetka`, podaci);
  }

  dohvDatumPVremePLokacija(datumP, vremeP, lokacija){
    const podaci = {
      datumP:datumP,
      vremeP:vremeP,
      lokacija:lokacija
    }

    return this.http.post(`${this.uri}/takmicenja/dohvDatumPVremePLokacija`, podaci);

  }

  dohvSport(sport){
    const podaci={
      sport:sport
    }

    return this.http.post(`${this.uri}/takmicenja/dohvSport`, podaci);
  }

  postaviKraj(sport, disciplina, pol, datumK, vremeK){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      datumK:datumK,
      vremeK:vremeK
    }

    return this.http.post(`${this.uri}/takmicenja/postaviKraj`, podaci);
  }
}
