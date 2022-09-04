import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  uri='http://localhost:4000'

  constructor(private http: HttpClient) { }

  prijava(username, password, tip){
    const podaci = {
      username:username,
      password:password,
      tip:tip
    }

    return this.http.post(`${this.uri}/korisnici/prijava`, podaci);
  }

  dohvUsernamePasswordTip(username, password, tip){
    const podaci = {
      username:username,
      password:password,
      tip:tip
    }

    return this.http.post(`${this.uri}/korisnici/dohvUsernamePasswordTip`, podaci);
  }

  promenaLozinke(username, password, newPassword){
    const podaci = {
      username:username,
      password:password,
      newPassword:newPassword
    }

    return this.http.post(`${this.uri}/korisnici/promenaLozinke`, podaci);
  }

  dohvSveKorisnike(){
    return this.http.get(`${this.uri}/korisnici/dohvSveKorisnike`);
  }

  registracija(username, password, ime, prezime, drzava, mail, tip, odobren){
    const podaci = {
      username:username,
      password:password,
      ime:ime, 
      prezime:prezime,
      drzava:drzava,
      mail:mail,
      tip:tip,
      odobren:odobren
    }

    return this.http.post(`${this.uri}/korisnici/registracija`, podaci);
  }

  dohvKorisnikeKojiNisuOdobreni(){
    return this.http.get(`${this.uri}/korisnici/dohvKorisnikeKojiNisuOdobreni`);
  }

  dohvKorisnikeKojiSuOdobreni(){
    return this.http.get(`${this.uri}/korisnici/dohvKorisnikeKojiSuOdobreni`);
  }

  odobriKorisnika(username, odobren){
    const podaci ={
      username:username,
      odobren:odobren
    }

    return this.http.post(`${this.uri}/korisnici/odobriKorisnika`, podaci);
  }

  dohvDelegate(){
    return this.http.get(`${this.uri}/korisnici/dohvDelegate`);
  }

  dodajDelegata(username, ime, prezime, brojDelegiranja, odobren){
    const podaci = {
      username:username,
      ime:ime,
      prezime:prezime,
      brojDelegiranja:brojDelegiranja,
      odobren:odobren
    }

    return this.http.post(`${this.uri}/korisnici/dodajDelegata`, podaci);
  }

  dohvatiDelegateZaDelegiranje(){
    return this.http.get(`${this.uri}/korisnici/dohvatiDelegateZaDelegiranje`);
  }

  dohvDelUsername(username){
    const podaci = {
      username:username
    }

    return this.http.post(`${this.uri}/korisnici/dohvDelUsername`, podaci);
  }

  povecajBrojDelegiranja(username, brojDelegiranja){
    const podaci = {
      username:username,
      brojDelegiranja:brojDelegiranja
    }

    return this.http.post(`${this.uri}/korisnici/povecajBrojDelegiranja`, podaci);
  }

  dohvDelImeIPrezime(ime, prezime){
    const podaci = {
      ime:ime,
      prezime:prezime
    }

    return this.http.post(`${this.uri}/korisnici/dohvDelImeIPrezime`, podaci);
  }
}
