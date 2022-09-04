import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';
import { Sportista } from '../models/sportista';
import { SportIDisciplina } from '../models/sport_i_disciplina';
import { SportIDisciplinaService } from '../sport-i-disciplina.service';
import { SportistaService } from '../sportista.service';
//import alertify from "alertify.js";

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private korisnikServis: KorisnikService,
    private sportIDisciplinaServis: SportIDisciplinaService,
    private ruter: Router) { }

  ngOnInit(): void {
    this.sportIDisciplinaServis.dohvatiSveSportoveIDisc().subscribe((spidis: SportIDisciplina[]) => {
      if (spidis) {
        this.sviSportoviIDiscipline = spidis;
      }
    })
  }

  username: string;
  password: string;
  tip: string;

  poruka: string;

  sviSportoviIDiscipline: SportIDisciplina[];
  sviSportisti: Sportista[];

  prijava() {
    if (this.username && this.password && this.tip) {
      this.korisnikServis.prijava(this.username, this.password, this.tip).subscribe((korisnik: Korisnik) => {
        if (korisnik) {
          localStorage.setItem('ulogovan', JSON.stringify(korisnik));
          if (korisnik.tip == 'organizator') {
            this.ruter.navigate(['organizator']);
          }
          else if (korisnik.tip == 'delegat') {
            this.korisnikServis.dohvUsernamePasswordTip(this.username, this.password, this.tip).subscribe((kor:Korisnik)=>{
              if(kor){
                if(kor.tip=='delegat' && kor.odobren=='0'){
                  alert('Ovaj delegat jos uvek nije odobren od strane organizatora');
                }
                else{
                  this.ruter.navigate(['delegat']);
                }
              }
            })
          }
          else if (korisnik.tip == 'vodja_delegacije') {
            this.korisnikServis.dohvUsernamePasswordTip(this.username, this.password, this.tip).subscribe((kor:Korisnik)=>{
              if(kor){
                if(kor.tip=='vodja_delegacije' && kor.odobren=='0'){
                  alert('Ovaj vodja jos uvek nije odobren od strane organizatora');
                }
                else{
                  this.ruter.navigate(['vodja']);
                }
              }
            })
          }
        }
        else {
          this.poruka = 'Greska';
        }
      })
    }
  }

  registracija() {
    this.ruter.navigate(['registracija']);
  }

  promeniLozinku() {
    this.ruter.navigate(['lozpromena']);
  }

  sveZemlje() {
    this.ruter.navigate(['zemlja']);
  }

  sveMedalje() {
    this.ruter.navigate(['medalja']);
  }

  pretraziSportiste() {
    this.ruter.navigate(['pretrazi-sportiste']);
  }
}
