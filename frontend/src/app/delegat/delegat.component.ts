import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedaljaService } from '../medalja.service';
import { Korisnik } from '../models/korisnik';
import { Medalja } from '../models/medalja';
import { Sport } from '../models/sport';
import { Sportista } from '../models/sportista';
import { SportIDisciplina } from '../models/sport_i_disciplina';
import { Takmicenje } from '../models/takmicenje';
import { PojedinacService } from '../pojedinac.service';
import { SportIDisciplinaService } from '../sport-i-disciplina.service';
import { SportService } from '../sport.service';
import { SportistaService } from '../sportista.service';
import { TakmicenjeService } from '../takmicenje.service';

@Component({
  selector: 'app-delegat',
  templateUrl: './delegat.component.html',
  styleUrls: ['./delegat.component.css']
})
export class DelegatComponent implements OnInit {

  constructor(private takmicenjeServis: TakmicenjeService,
    private sportistaServis: SportistaService,
    private medaljaServis: MedaljaService,
    private sportIDisciplinaServis: SportIDisciplinaService,
    private pojedinacServis: PojedinacService,
    private sportServis: SportService,
    private ruter: Router) { }

  ngOnInit(): void {
    this.delegat = JSON.parse(localStorage.getItem('ulogovan'));
    if (this.delegat == null) {
      this.ruter.navigate(['']);
    }
    if (this.delegat.tip != 'delegat') {
      localStorage.removeItem('ulogovan');
      this.ruter.navigate(['']);
    }
    if (this.delegat.odobren == "0") {
      this.poruka = "Korisnik jos uvek nije odobren od strane organizatora.";
    }
    this.takmicenjeServis.dohvSve().subscribe((tak: Takmicenje[]) => {
      if (tak) {
        let imeIPrezime: string = "";
        imeIPrezime = this.delegat.ime + " " + this.delegat.prezime;
        for (let i = 0; i < tak.length; i++) {
          for (let j = 0; j < tak[i].delegati.length; j++) {
            if (tak[i].delegati[j] == imeIPrezime) {
              this.svaTakmicenja.push(tak[i]);
            }
          }
        }
      }
    })
    this.takmicenjeServis.dohvSve().subscribe((t: Takmicenje[]) => {
      if (t) {
        let imeIPrezime: string = "";
        imeIPrezime = this.delegat.ime + " " + this.delegat.prezime;
        for (let i = 0; i < t.length; i++) {
          for (let j = 0; j < t[i].delegati.length; j++) {
            if (t[i].delegati[j] == imeIPrezime) {
              this.mojaTakmicenja.push(t[i]);
            }
          }
        }
        for (let i = 0; i < this.mojaTakmicenja.length; i++) {
          this.sportServis.dohvPoSportu(this.mojaTakmicenja[i].sport).subscribe((sp: Sport) => {
            if (sp) {
              this.sviSportovi.push(sp);
              /*let n=0;
              for(let i=0;i<this.sportovi.length-1;i++){
                this.sviSportovi[n]=this.sportovi[i];
                for(let j=i+1;j<this.sportovi.length;j++){
                  if(this.sportovi[i].sport==this.sportovi[j].sport){
                    i++;
                  }
                }
                n++;
              }*/
            }
          })
        }
      }
    })
  }
  sportovi: Sport[] = [];
  sviSportovi: Sport[] = [];
  brojac: string[] = [];
  delegat: Korisnik;

  svaTakmicenja: Takmicenje[] = [];

  poruka: string;
  datumi: string[] = [];
  vremena: string[] = [];
  pocetak: boolean;
  rezultat: boolean;
  //sportidis:string;

  postaviR() {
    this.rezultat = true;
  }

  skloniR() {
    this.rezultat = false;
  }

  postaviP() {
    this.pocetak = true;
  }

  skloniP() {
    this.pocetak = false;
  }

  s: boolean;
  sport: string;
  disciplina: string;
  pol: string;
  mojaTakmicenja: Takmicenje[] = [];
  sveDiscipline: SportIDisciplina[] = [];

  nadjiDiscipline() {
    this.sportIDisciplinaServis.dohvSportIPol(this.sport).subscribe((sportovi: SportIDisciplina[]) => {
      if (sportovi) {
        this.sveDiscipline = [];
        for (let i = 0; i < sportovi.length; i++) {
          this.sveDiscipline[i] = sportovi[i];
        }
      }
    })
  }

  nadjiSportiste() {
    this.sportistiZaDelegata = [];
    let u: Array<String> = [];
    for (let i = 0; i < this.mojaTakmicenja.length; i++) {
      if (this.mojaTakmicenja[i].sport == this.sport && this.mojaTakmicenja[i].disciplina == this.disciplina &&
        this.mojaTakmicenja[i].pol == this.pol) {
        u = this.mojaTakmicenja[i].ucesnici;
        break;
      }
    }
    for (let i = 0; i < u.length; i++) {
      this.sportistaServis.dohvImePolSportDisc(u[i], this.pol, this.sport, this.disciplina).subscribe((sp: Sportista[]) => {
        if (sp) {
          for (let j = 0; j < sp.length; j++) {
            this.sportistiZaDelegata.push(sp[j]);
          }
        }
      })
    }
    /*this.sportistaServis.dohvPolSportDisc(this.pol, this.sport, this.disciplina).subscribe((s: Sportista[]) => {
      if (s) {
        this.sportistiZaDelegata = [];
        let j = 0;
        for (let i = 0; i < s.length; i++) {
          if (s[i].disciplina == this.disciplina) {
            this.sportistiZaDelegata[j] = s[i];
            j++;
          }
        }
      }
    })*/
    this.s = true;
  }

  dodajPocetak(sport, disciplina, pol, lokacija, index) {
    if (this.datumi[index] == null || this.vremena[index] == null) {
      this.poruka = "Morate uneti trazeno vreme i datum";
    }
    else {
      this.takmicenjeServis.dohvDatumPVremePLokacija(this.datumi[index], this.vremena[index], lokacija).subscribe((tak: Takmicenje) => {
        if (tak) {
          this.poruka = "Dolazi do preklapanja pocetka takmicenja, molimo vas da promenite vreme";
          return;
        }
        else {
          this.takmicenjeServis.postaviVremePocetka(sport, disciplina, pol, this.datumi[index], this.vremena[index]).subscribe(res => {
            if (res['poruka'] == 'ok') {
              this.ruter.navigate(['delegat']);
              this.poruka = "Uspesno ste uneli datum i vreme pocetka za takmicenje";
            }
          })
        }
      })
    }
  }

  sportistiZaDelegata: Sportista[];
  rezultatiKucice: string[] = [];
  porukaRezultati: string;

  dugmeKraj: boolean = true;

  rezultati: Sportista[] = [];

  dodajRezultat(sport, disciplina, pol, imeIPrezime, index) {
    this.sportistaServis.dodajVrednostRezultata(sport, disciplina, pol, imeIPrezime, this.rezultatiKucice[index]).subscribe(res => {
      //alert(this.rezultatiKucice[index]);
      if (res['poruka'] == 'ok') {
        if (disciplina == 'skok u vis' || disciplina == 'skok u dalj' || disciplina == 'troskok' || disciplina == 'skok s motkom' || disciplina == 'bacanje kugle'
          || disciplina == 'bacanje diska' || disciplina == 'bacanje kladiva' || disciplina == 'bacanje koplja' || disciplina == '100 metara trcanje' || disciplina == '200 metara trcanje'
          || disciplina == '400 metera trcanje' || disciplina == '100m leptir' || disciplina == '200m slobodno') {
          let prvi = this.rezultatiKucice[index].split(/\W+/);
          let p = (parseInt(prvi[0]) * 100) + (parseInt(prvi[1]));
          this.sportistaServis.postaviBroj(sport, disciplina, pol, imeIPrezime, p).subscribe(reg => {
            if (reg['poruka'] == 'ok') {
              this.porukaRezultati = 'Rezultat je dodat';
              this.sportistaServis.dohvPolSportDisc(pol, sport, disciplina).subscribe((sportisti: Sportista[]) => {
                if (sportisti) {
                  let broj = 0;
                  for (let i = 0; i < sportisti.length; i++) {
                    if (sportisti[i].rezbroj != 0) {
                      broj++;
                    }
                  }
                  if (broj == sportisti.length) {
                    this.dugmeKraj = true;
                  }
                  else {
                    this.dugmeKraj = false;
                  }
                }
              })
            }
          })
        }
        else {
          if (disciplina == '800 metara trcanje' || disciplina == '5000 metara trcanje' || disciplina == '10000 metara trcanje' || disciplina == 'maraton'
            || disciplina == '20km brzo hodanje' || disciplina == '50km brzo hodanje' || disciplina == 'drumska traka 225km') {
            let prvi = this.rezultatiKucice[index].split(/\W+/);
            let p = (parseInt(prvi[0]) * 3600) + (parseInt(prvi[1]) * 60) + (parseInt(prvi[2]) * 60);
            this.sportistaServis.postaviBroj(sport, disciplina, pol, imeIPrezime, p).subscribe(reg => {
              if (reg['poruka'] == 'ok') {
                this.porukaRezultati = 'Rezultat je dodat';
                this.sportistaServis.dohvPolSportDisc(pol, sport, disciplina).subscribe((sportisti: Sportista[]) => {
                  if (sportisti) {
                    let broj = 0;
                    for (let i = 0; i < sportisti.length; i++) {
                      if (sportisti[i].rezbroj != 0) {
                        broj++;
                      }
                    }
                    if (broj == sportisti.length) {
                      this.dugmeKraj = true;
                    }
                    else {
                      this.dugmeKraj = false;
                    }
                  }
                })
              }
            })
          }
        }
      }
    })
  }

  postaviMedalje(sport, disciplina, pol) {
    this.sportistaServis.dohvPolSportDisc(pol, sport, disciplina).subscribe((sportisti: Sportista[]) => {
      if (sportisti) {
        let broj = 0;
        for (let i = 0; i < sportisti.length; i++) {
          if (sportisti[i].rezbroj != 0) {
            broj++;
          }
        }
        if (broj == sportisti.length) {
          this.dugmeKraj = true;
          if (disciplina == "100 metara trcanje" || disciplina == "stafetno trcanje 100" || disciplina == "200 metara trcanje" || disciplina == "400 metara trcanje"
            || disciplina == "stafetno trcanje 400" || disciplina == "800 metara trcanje" || disciplina == "5000 metara trcanje" || disciplina == "10000 metara trcanje"
            || disciplina == "maraton" || disciplina == "20km brzo hodanje" || disciplina == "50km brzo hodanje" || disciplina == "drumska traka 225km" || disciplina == "100m leptir"
            || disciplina == "200m slobodno") {
            this.nalazenjeMinimuma(sport, disciplina, pol);
            this.postaviKraj(sport, disciplina, pol);
            this.porukaRezultati = "Zavrseno";
          }
          else {
            this.nalazenjeMaksimuma(sport, disciplina, pol);
            this.postaviKraj(sport, disciplina, pol);
            this.porukaRezultati = "Zavrseno";
          }
        }
        else {
          alert('Takmicenje se ne moze zavrsiti dok se ne unesu svi rezultati');
        }
      }
    })
  }

  porukaZ: string = "";
  porukaS: string = "";
  porukaB: string = "";
  kraj: string;


  ponovnaTrka: string = "";
  ponovljeniRezultatiKucice: string[] = [];

  postaviKraj(sport, disciplina, pol) {
    let datum = new Date();
    let d = datum.getDate() + '.' + (datum.getMonth() + 1) + '.' + datum.getFullYear() + '.';
    let v = datum.getHours() + ':' + datum.getMinutes();
    this.takmicenjeServis.postaviKraj(sport, disciplina, pol, d, v).subscribe(res => {
      if (res['poruka'] == 'ok') {
        this.kraj = 'Kraj je postavljen';
      }
    })
  }

  poruka1: string = "";
  ponovo1: Sportista = new Sportista();
  ponovo2: Sportista = new Sportista();
  prazan: string = "";

  nalazenjeMaksimuma(sport, disciplina, pol) {
    this.sportistaServis.dohvPolSportDisc(pol, sport, disciplina).subscribe((sportisti: Sportista[]) => {
      if (sportisti) {
        for (let i = 0; i < sportisti.length - 1; i++) {
          for (let j = i + 1; j < sportisti.length; j++) {
            if (sportisti[i].rezbroj < sportisti[j].rezbroj) {
              let novi = new Sportista();
              novi = sportisti[i];
              sportisti[i] = sportisti[j];
              sportisti[j] = novi;
            }
          }
        }

        for (let i = 0; i < sportisti.length - 1; i++) {
          for (let j = i + 1; j < sportisti.length; j++) {
            if (sportisti[i].rezbroj == sportisti[j].rezbroj) {
              this.ponovo1 = sportisti[i];
              this.ponovo2 = sportisti[j];
              this.ponovnaTrka = 'da';
              break;
            }
          }
        }

        if (this.ponovnaTrka == 'da') {
          this.s = false;
          this.sportistaServis.oduzmiRezultat(this.ponovo1.sport, this.ponovo1.disciplina, this.ponovo1.pol, this.ponovo1.imeIPrezime, 0, this.prazan).subscribe(res => {
            if (res['poruka'] == 'ok') {
              this.sportistaServis.oduzmiRezultat(this.ponovo2.sport, this.ponovo2.disciplina, this.ponovo2.pol, this.ponovo2.imeIPrezime, 0, this.prazan).subscribe(rem => {
                if (rem['poruka'] == 'ok') {
                  this.nadjiSportiste();
                  this.s = true;
                  this.poruka1 = 'ponovo';
                }
              })
            }
          })
        }
        else {
          for (let i = 0; i < 3; i++) {
            this.medaljaServis.dohvSveMedaljeZaDrzavu(sportisti[i].drzava).subscribe((m: Medalja) => {
              if (m) {
                if (i == 0) {
                  //alert(sportisti[i].drzava);
                  let zlatne = m.brZlatnih + 1;
                  let ukupno = m.ukupno + 1;
                  this.medaljaServis.povecajZlatne(sportisti[i].drzava, zlatne, ukupno).subscribe(res => {
                    if (res['poruka'] == 'ok') {
                      this.sportistaServis.postaviStatusMedalja(sportisti[i].imeIPrezime, "1").subscribe(reg => {
                        if (reg['poruka'] == 'ok') {
                          this.porukaZ = 'Povecan broj zlatnih medalja';
                        }
                      })
                    }
                  })
                }
                else {
                  if (i == 1) {
                    //alert(sportisti[i].drzava);
                    let srebrne = m.brSrebrnih + 1;
                    let ukupno = m.ukupno + 1;
                    this.medaljaServis.povecajSrebrne(sportisti[i].drzava, srebrne, ukupno).subscribe(res => {
                      if (res['poruka'] == 'ok') {
                        this.sportistaServis.postaviStatusMedalja(sportisti[i].imeIPrezime, "1").subscribe(reg => {
                          if (reg['poruka'] == 'ok') {
                            this.porukaS = 'Povecan broj srebrnih medalja';
                          }
                        })
                      }
                    })
                  }
                  else {
                    //alert(sportisti[i].drzava);
                    let bronzane = m.brBronzanih + 1;
                    let ukupno = m.ukupno + 1;
                    this.medaljaServis.povecajBronzane(sportisti[i].drzava, bronzane, ukupno).subscribe(res => {
                      if (res['poruka'] == 'ok') {
                        this.sportistaServis.postaviStatusMedalja(sportisti[i].imeIPrezime, "1").subscribe(reg => {
                          if (reg['poruka'] == 'ok') {
                            this.porukaB = 'Povecan broj bronzanih medalja';
                          }
                        })
                      }
                    })
                  }
                }
              }
            })
          }
        }
      }
    })
  }

  daLiTrebaPonovo() {
    for (let i = 0; i < this.sportistiZaDelegata.length - 1; i++) {
      for (let j = i + 1; j < this.sportistiZaDelegata.length; j++) {
        if (this.sportistiZaDelegata[i].rezbroj == this.sportistiZaDelegata[j].rezbroj) {
          this.ponovo1 = this.sportistiZaDelegata[i];
          this.ponovo2 = this.sportistiZaDelegata[j];
          this.ponovnaTrka = 'da';
          break;
        }
      }
    }
  }

  nalazenjeMinimuma(sport, disciplina, pol) {
    this.sportistaServis.dohvPolSportDisc(pol, sport, disciplina).subscribe((sportisti: Sportista[]) => {
      if (sportisti) {
        for (let i = 0; i < sportisti.length - 1; i++) {
          for (let j = i + 1; j < sportisti.length; j++) {
            if (sportisti[i].rezbroj > sportisti[j].rezbroj) {
              let novi = new Sportista();
              novi = sportisti[i];
              sportisti[i] = sportisti[j];
              sportisti[j] = novi;
            }
          }
        }

        for (let i = 0; i < sportisti.length - 1; i++) {
          for (let j = i + 1; j < sportisti.length; j++) {
            if (sportisti[i].rezbroj == sportisti[j].rezbroj) {
              this.ponovo1 = sportisti[i];
              this.ponovo2 = sportisti[j];
              this.ponovnaTrka = 'da';
              break;
            }
          }
        }

        if (this.ponovnaTrka == 'da') {
          this.s = false;
          this.sportistaServis.oduzmiRezultat(this.ponovo1.sport, this.ponovo1.disciplina, this.ponovo1.pol, this.ponovo1.imeIPrezime, 0, this.prazan).subscribe(res => {
            if (res['poruka'] == 'ok') {
              this.sportistaServis.oduzmiRezultat(this.ponovo2.sport, this.ponovo2.disciplina, this.ponovo2.pol, this.ponovo2.imeIPrezime, 0, this.prazan).subscribe(rem => {
                if (rem['poruka'] == 'ok') {
                  this.nadjiSportiste();
                  this.s = true;
                  this.poruka1 = 'ponovo';
                }
              })
            }
          })
        }
        else {
          for (let i = 0; i < 3; i++) {
            this.medaljaServis.dohvSveMedaljeZaDrzavu(sportisti[i].drzava).subscribe((m: Medalja) => {
              if (m) {
                if (i == 0) {
                  //alert(sportisti[i].drzava);
                  let zlatne = m.brZlatnih + 1;
                  let ukupno = m.ukupno + 1;
                  this.medaljaServis.povecajZlatne(sportisti[i].drzava, zlatne, ukupno).subscribe(res => {
                    if (res['poruka'] == 'ok') {
                      this.sportistaServis.postaviStatusMedalja(sportisti[i].imeIPrezime, "1").subscribe(reg => {
                        if (reg['poruka'] == 'ok') {
                          this.porukaZ = 'Povecan broj zlatnih medalja';
                        }
                      })
                    }
                  })
                }
                else {
                  if (i == 1) {
                    //alert(sportisti[i].drzava);
                    let srebrne = m.brSrebrnih + 1;
                    let ukupno = m.ukupno + 1;
                    this.medaljaServis.povecajSrebrne(sportisti[i].drzava, srebrne, ukupno).subscribe(res => {
                      if (res['poruka'] == 'ok') {
                        this.sportistaServis.postaviStatusMedalja(sportisti[i].imeIPrezime, "1").subscribe(reg => {
                          if (reg['poruka'] == 'ok') {
                            this.porukaS = 'Povecan broj srebrnih medalja';
                          }
                        })
                      }
                    })
                  }
                  else {
                    //alert(sportisti[i].drzava);
                    let bronzane = m.brBronzanih + 1;
                    let ukupno = m.ukupno + 1;
                    this.medaljaServis.povecajBronzane(sportisti[i].drzava, bronzane, ukupno).subscribe(res => {
                      if (res['poruka'] == 'ok') {
                        this.sportistaServis.postaviStatusMedalja(sportisti[i].imeIPrezime, "1").subscribe(reg => {
                          if (reg['poruka'] == 'ok') {
                            this.porukaB = 'Povecan broj bronzanih medalja';
                          }
                        })
                      }
                    })
                  }
                }
              }
            })
          }
        }
      }
    })
  }
}
