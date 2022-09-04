import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportistaService {

  uri='http://localhost:4000'

  constructor(private http: HttpClient) { }

  dohvSveSportiste(){
    return this.http.get(`${this.uri}/sportisti/dohvSveSportiste`);
  }

  postaviBroj(sport, disciplina, pol, imeIPrezime, rezbroj){
    const podaci = {
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      imeIPrezime:imeIPrezime,
      rezbroj:rezbroj
    }

    return this.http.post(`${this.uri}/sportisti/postaviBroj`, podaci);
  }

  postaviRang(sport, disciplina, pol, imeIPrezime, rang){
    const podaci = {
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      imeIPrezime:imeIPrezime,
      rang:rang
    }

    return this.http.post(`${this.uri}/sportisti/postaviRang`, podaci);
  }

  oduzmiRezultat(sport, disciplina, pol, imeIPrezime, rezbroj, rezultat){
    const podaci = {
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      imeIPrezime:imeIPrezime,
      rezbroj:rezbroj,
      rezultat:rezultat
    }

    return this.http.post(`${this.uri}/sportisti/oduzmiRezultat`, podaci);
  }

  postaviStatusMedalja(imeIPrezime, medalja){
    const podaci = {
      imeIPrezime:imeIPrezime,
      medalja:medalja
    }

    return this.http.post(`${this.uri}/sportisti/postaviStatusMedalja`, podaci);
  }

  dodajSportistu(imeIPrezime, pol, sport, disciplina, drzava, medalja, rezultat, rang, rezbroj){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      sport:sport,
      disciplina:disciplina,
      drzava:drzava,
      medalja:medalja,
      rezultat:rezultat,
      rang:rang,
      rezbroj:rezbroj
    }

    return this.http.post(`${this.uri}/sportisti/dodajSportistu`, podaci);
  }

  dodajVrednostRezultata(sport, disciplina, pol, imeIPrezime, rezultat){
    const podaci = {
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      imeIPrezime:imeIPrezime,
      rezultat:rezultat
      //rezbroj:rezbroj
    }

    return this.http.post(`${this.uri}/sportisti/dodajVrednostRezultata`, podaci);
  }

  dohvSportisteNaOsnovuSportaIDisc(sport, disciplina){
    const podaci = {
      sport:sport,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportisteNaOsnovuSportaIDisc`, podaci);
  }

  dohvSportistePoImenuIPrezimenu(imeIPrezime){
    const podaci = {
      imeIPrezime:imeIPrezime
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoImenuIPrezimenu`, podaci);
  }

  dohvSportistePoDrzavi(drzava){
    const podaci = {
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoDrzavi`, podaci);
  }

  dohvSportistePoSportu(sport){
    const podaci = {
      sport:sport
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoSportu`, podaci);
  }

  dohvSportistePoDisciplini(disciplina){
    const podaci = {
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoDisciplini`, podaci);
  }

  dohvSportistePoPolu(pol){
    const podaci = {
      pol:pol
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoPolu`, podaci);
  }

  dohvSportisteSaMedaljom(){

    return this.http.get(`${this.uri}/sportisti/dohvSportisteSaMedaljom`);
  }

  dohvSportistePoImenuIPolu(imeIPrezime, pol){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoImenuIPolu`, podaci);
  }

  dohvSportistePoImenuISportu(imeIPrezime, sport){
    const podaci = {
      imeIPrezime:imeIPrezime,
      sport:sport
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoImenuISportu`, podaci);
  }

  dohvSportistePoImenuIDisciplini(imeIPrezime, disciplina){
    const podaci = {
      imeIPrezime:imeIPrezime,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoImenuIDisciplini`, podaci);
  }

  dohvSportistePoImenuIDrzavi(imeIPrezime, drzava){
    const podaci = {
      imeIPrezime:imeIPrezime,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoImenuIDrzavi`, podaci);
  }

  dohvSportistePoImenuIMedaljama(imeIPrezime){
    const podaci = {
      imeIPrezime:imeIPrezime
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoImenuIMedaljama`, podaci);
  }

  dohvSportistePoPoluISportu(pol, sport){
    const podaci = {
      pol:pol,
      sport:sport
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoPoluISportu`, podaci);
  }

  dohvSportistePoPoluIDisciplini(pol, disciplina){
    const podaci = {
      pol:pol,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoPoluIDisciplini`, podaci);
  }

  dohvSportistePoPoluIDrzavi(pol, drzava){
    const podaci = {
      pol:pol,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoPoluIDrzavi`, podaci);
  }

  dohvSportistePoPoluIMedaljama(pol){
    const podaci = {
      pol:pol
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoPoluIMedaljama`, podaci);
  }

  dohvSportistePoSportuIDisciplini(sport, disciplina){
    const podaci = {
      sport:sport,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoSportuIDisciplini`, podaci);
  }

  dohvSportistePoSportuIDrzavi(sport, drzava){
    const podaci = {
      sport:sport,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoSportuIDrzavi`, podaci);
  }

  dohvSportistePoSportuIMedaljama(sport){
    const podaci = {
      sport:sport
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoSportuIMedaljama`, podaci);
  }

  dohvSportistePoDiscipliniIDrzavi(disciplina, drzava){
    const podaci = {
      disciplina:disciplina,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoDiscipliniIDrzavi`, podaci);
  }

  dohvSportistePoDiscipliniIMedaljama(disciplina){
    const podaci = {
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoDiscipliniIMedaljama`, podaci);
  }

  dohvSportistePoDrzaviIMedaljama(drzava){
    const podaci = {
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportistePoDrzaviIMedaljama`, podaci);
  }

  dohvPoImePolSport(imeIPrezime, pol, sport){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      sport:sport
    }

    return this.http.post(`${this.uri}/sportisti/dohvPoImePolSport`, podaci);
  }

  dohvPoImePolDisiciplina(imeIPrezime, pol, disciplina){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvPoImePolDisiciplina`, podaci);
  }

  dohvPoImePolDrzava(imeIPrezime, pol, drzava){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvPoImePolDrzava`, podaci);
  }

  dohvPoImePolMedalja(imeIPrezime, pol){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol
    }

    return this.http.post(`${this.uri}/sportisti/dohvPoImePolMedalja`, podaci);
  }

  dohvPolSportDisc(pol, sport, disciplina){
    const podaci = {
      pol:pol,
      sport:sport,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvPolSportDisc`, podaci);
  }

  dohvPolSportDrzava(pol, sport, drzava){
    const podaci = {
      pol:pol,
      sport:sport,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvPolSportDrzava`, podaci);
  }

  dohvPolSportMedalja(pol, sport){
    const podaci = {
      pol:pol,
      sport:sport
    }

    return this.http.post(`${this.uri}/sportisti/dohvPolSportMedalja`, podaci);
  }

  dohvSportDiscDrzava(sport, disciplina, drzava){
    const podaci = {
      sport:sport,
      disciplina:disciplina,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportDiscDrzava`, podaci);
  }

  dohvSportDiscMedalja(sport, disciplina){
    const podaci = {
      sport:sport,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportDiscMedalja`, podaci);
  }

  dohvDiscDrzavaMedalja(disciplina, drzava){
    const podaci = {
      disciplina:disciplina,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvDiscDrzavaMedalja`, podaci);
  }

  dohvImePolSportDisc(imeIPrezime, pol, sport, disciplina){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      sport:sport,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvImePolSportDisc`, podaci);
  }

  dohvImePolSportDrzava(imeIPrezime, pol, sport, drzava){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      sport:sport,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvImePolSportDrzava`, podaci);
  }

  dohvImePolSportMedalja(imeIPrezime, pol, sport){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      sport:sport
    }

    return this.http.post(`${this.uri}/sportisti/dohvImePolSportMedalja`, podaci);
  }

  dohvPolSportDiscDrzava(pol, sport, disciplina, drzava){
    const podaci = {
      pol:pol,
      sport:sport,
      disciplina:disciplina,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvPolSportDiscDrzava`, podaci);
  }

  dohvPolSportDiscMedalja(pol, sport, disciplina){
    const podaci = {
      pol:pol,
      sport:sport,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvPolSportDiscMedalja`, podaci);
  }

  dohvSportDiscDrzavaMedalja(sport, disciplina, drzava){
    const podaci = {
      sport:sport,
      disciplina:disciplina,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvSportDiscDrzavaMedalja`, podaci);
  }

  dohvImePolSportDiscDrz(imeIPrezime, pol, sport, disciplina, drzava){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      sport:sport,
      disciplina:disciplina,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvImePolSportDiscDrz`, podaci);
  }

  dohvImePolSportDiscMedalja(imeIPrezime, pol, sport, disciplina){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      sport:sport,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvImePolSportDiscMedalja`, podaci);
  }

  dohvPolSportDiscDrzavaMedalja(pol, sport, disciplina, drzava){
    const podaci = {
      pol:pol,
      sport:sport,
      disciplina:disciplina,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvPolSportDiscDrzavaMedalja`, podaci);
  }

  dohvPoSvim(imeIPrezime, pol, sport, disciplina, drzava){
    const podaci = {
      imeIPrezime:imeIPrezime,
      pol:pol,
      sport:sport,
      disciplina:disciplina,
      drzava:drzava
    }

    return this.http.post(`${this.uri}/sportisti/dohvPoSvim`, podaci);
  }
}
