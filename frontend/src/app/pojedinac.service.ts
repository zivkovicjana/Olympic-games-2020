import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PojedinacService {
  
  uri='http://localhost:4000'

  constructor(private http: HttpClient) { }

  dodajPojedinca(imeIPrezime, pol, sport, discipline, drzava, medalja, rezultat){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      sport:sport,
      discipline:discipline, 
      drzava:drzava,
      medalja:medalja,
      rezultat:rezultat
    }

    return this.http.post(`${this.uri}/pojedinci/dodajPojedinca`, podaci);

  }

  dodajDisciplinuZaTakmicara(imeIPrezime, disciplina, drzava){
    const podaci = {
      imeIPrezime:imeIPrezime,
      disciplina:disciplina,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/pojedinci/dodajDisciplinuZaTakmicara`, podaci);
  }

  dohvPoImenu(imeIPrezime){
    const podaci = {
      imeIPrezime:imeIPrezime
    }

    return this.http.post(`${this.uri}/pojedinci/dohvPoImenu`, podaci);
  }

  dohvSportPol(sport, pol){
    const podaci = {
      sport:sport,
      pol:pol
    }

    return this.http.post(`${this.uri}/pojedinci/dohvSportPol`, podaci);

  }

  dohvatiSve(){
    return this.http.get(`${this.uri}/pojedinci/dohvatiSve`);
  }

  dohvImePolSportDisciplina(imeIPrezime, pol, sport, disciplina){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      sport:sport,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/pojedinci/dohvImePolSportDisciplina`, podaci);
  }
}
