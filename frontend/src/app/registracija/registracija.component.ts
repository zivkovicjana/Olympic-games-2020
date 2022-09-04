import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(/*private registracijaServis:RegistracijaService,*/
    private korisnikServis: KorisnikService) { }

  ngOnInit(): void {
    this.korisnikServis.dohvSveKorisnike().subscribe((korisnici: Korisnik[]) => {
      if (korisnici) {
        this.sviKorisnici = korisnici;
      }
    });
  }

  sviKorisnici: Korisnik[];

  username: string;
  password: string;
  passwordAgain: string;
  ime: string;
  prezime: string;
  drzava: string;
  mail: string;
  tip: string;
  poruka: string;

  odobren: string = "0";

  registracija() {
    this.provera();
    if (this.poruka == 'ok') {
      for (let i = 0; i < this.sviKorisnici.length; i++) {
        if (this.sviKorisnici[i].username == this.username) {
          this.poruka = "Postoji korisnik sa ovim korisnickim imenom";
          return;
        }
      }
      if (this.password == this.passwordAgain) {
        this.korisnikServis.registracija(this.username, this.password, this.ime, this.prezime, this.drzava, this.mail, this.tip, this.odobren).subscribe((reg: Korisnik) => {
          if (reg['poruka'] == 'korisnik je dodat') {
            this.poruka = "Uspesna registracija";
          } else {
            this.poruka = "Neuspesna registracija";
          }
        })
      } else {
        this.poruka = "Lozinke se ne poklapaju";
      }
    }
    else{
      this.poruka='Lozinka nije u odgovarajucem formatu';
    }
  }

  provera() {
    const reg = /(.)\1\1\1/;
    if (reg.test(this.password)) {
      this.poruka = "Ponavlja se vise od 3 slova";
      return;
    }
    else {
      const regex = new RegExp("^(?=(.*[a-z]){3,})(?=.*[A-Z])(?=(.*[0-9]){2,})(?=(.*[!@#\$%\^&\*\/]){2,})(?=.{8,12})");
      if (regex.test(this.password) && (/[a-z]/.test(this.password[0]) || /[A-Z]/.test(this.password[0]))) {
        this.poruka = 'ok';
      }
      else {
        this.poruka = 'not ok';
      }
    }
  }
}
