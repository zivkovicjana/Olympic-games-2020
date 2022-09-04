import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZemljaService {

  uri='http://localhost:4000'

  constructor(private http: HttpClient) { } 

  dohvSveZemlje(){
    return this.http.get(`${this.uri}/zemlje/dohvSveZemlje`);
  }

  dohvDrzavu(ime){
    const podaci = {
      ime:ime
    }

    return this.http.post(`${this.uri}/zemlje/dohvDrzavu`, podaci);
  }

  povecajSportiste(ime, brSportista){
    const podaci = {
      ime:ime,
      brSportista:brSportista
    }

    return this.http.post(`${this.uri}/zemlje/povecajSportiste`, podaci);
  }
}
