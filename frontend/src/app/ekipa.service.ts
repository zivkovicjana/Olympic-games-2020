import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EkipaService {

  uri='http://localhost:4000'

  constructor(private http: HttpClient) { }

  dodajEkipu(sport, disciplina, brTakmicara, drzava, pol, takmicari){
     const podaci = {
       sport:sport,
       disciplina:disciplina,
       brTakmicara:brTakmicara,
       drzava:drzava,
       pol:pol,
       takmicari:takmicari
     }

     return this.http.post(`${this.uri}/ekipe/dodajEkipu`, podaci);
  }

  dodajTakmicaraUEkipu(id, imeIPrezime){
    const podaci = {
      id:id,
      imeIPrezime:imeIPrezime
    }

    return this.http.post(`${this.uri}/ekipe/dodajTakmicaraUEkipu`, podaci);
  }

  azurirajBrojTakmicara(id, brTakmicara){
    const podaci = {
      id:id,
      brTakmicara:brTakmicara
    }

    return this.http.post(`${this.uri}/ekipe/azurirajBrojTakmicara`, podaci);
  }

  dohvEkipuPoSportuDrzaviIPolu(sport, drzava, pol){
    const podaci = {
      sport:sport,
      drzava:drzava,
      pol:pol
    }

    return this.http.post(`${this.uri}/ekipe/dohvEkipuPoSportuDrzaviIPolu`, podaci);
  }
}
