import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EkipaService } from '../ekipa.service';
import { Ekipa } from '../models/ekipa';
import { Korisnik } from '../models/korisnik';
import { Sport } from '../models/sport';
import { Sportista } from '../models/sportista';
import { SportIDisciplina } from '../models/sport_i_disciplina';
import { Takmicenje } from '../models/takmicenje';
import { Zemlja } from '../models/zemlja';
import { PojedinacService } from '../pojedinac.service';
import { SportIDisciplinaService } from '../sport-i-disciplina.service';
import { SportService } from '../sport.service';
import { SportistaService } from '../sportista.service';
import { TakmicenjeService } from '../takmicenje.service';
import { ZemljaService } from '../zemlja.service';

@Component({
  selector: 'app-vodja',
  templateUrl: './vodja.component.html',
  styleUrls: ['./vodja.component.css']
})
export class VodjaComponent implements OnInit {

  constructor(private sportistaServis: SportistaService,
    private sportIDisciplinaServis: SportIDisciplinaService,
    private ekipaServis: EkipaService,
    private pojedinacServis: PojedinacService,
    private takmicenjeServis: TakmicenjeService,
    private zemljaServis: ZemljaService,
    private sportServis: SportService,
    private ruter: Router) { }

  ngOnInit(): void {
    this.vodja = JSON.parse(localStorage.getItem('ulogovan'));
    if(this.vodja==null){
      this.ruter.navigate(['']);
    }
    if(this.vodja.tip!='vodja_delegacije'){
      localStorage.removeItem('ulogovan');
      this.ruter.navigate(['']);
    }
    if (this.vodja.odobren == "0") {
      this.poruka = "Korisnik jos uvek nije odobre od strane organizatora";
    }
    this.sportistaServis.dohvSportistePoDrzavi(this.vodja.drzava).subscribe((sportisti: Sportista[]) => {
      if (sportisti) {
        this.brClanovaTima = sportisti.length;
      }
    });
    this.sportServis.dohvSveSportove().subscribe((sportovi: Sport[]) => {
      if (sportovi) {
        this.sviSportovi=sportovi;
      }
    });
  }

  vodja: Korisnik;

  imeIPrezime: string;
  pol: string;
  sport: string;
  disciplina: string;
  discipline: string[] = [];

  poruka: string;
  brClanovaTima: number;

  sviSportovi: Sport[] = [];
  sveDiscipline: SportIDisciplina[];
  takmicari: string[] = [];

  sportista: boolean;
  broj: boolean;

  postaviB() {
    this.broj = true;
  }

  skloniB() {
    this.broj = false;
  }

  postaviS() {
    this.sportista = true;
  }

  skloniS() {
    this.sportista = false;
  }

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

  prazan: string = "";

  dodajSportistu() {
    if (this.vodja.odobren == "1") {
      if (this.imeIPrezime && this.pol && this.sport && this.disciplina) {
        this.takmicenjeServis.dohvSportDisciplinaPol(this.sport, this.disciplina, this.pol).subscribe((takmicenja: Takmicenje[]) => {
          if (takmicenja) {
            this.poruka = "Zavrsena je prijava takmicara za ovaj sport u ovoj disciplini za ovaj pol";
            return;
          }
          else {
            this.sportIDisciplinaServis.dohvSport(this.sport).subscribe((sport: SportIDisciplina) => {
              if (sport) {
                if (sport.vrsta == 'individualni') {
                  this.sportistaServis.dohvSportistePoImenuIDrzavi(this.imeIPrezime, this.vodja.drzava).subscribe((sportisti: Sportista[]) => {
                    if (sportisti.length > 0) {
                      for (let i = 0; i < sportisti.length; i++) {
                        if (sportisti[i].sport == this.sport) {
                          if (sportisti[i].disciplina == this.disciplina) {
                            this.poruka = 'Takmicar se vec takmici u ovoj disciplini';
                            return;
                          }
                        }
                        else {
                          this.poruka = 'Takmicar moze da se takmici samo u jednom sportu';
                          return;
                        }
                      }
                      this.sportistaServis.dodajSportistu(this.imeIPrezime, this.pol, this.sport, this.disciplina, this.vodja.drzava, 0, this.prazan, 0, 0).subscribe(reg => {
                        if (reg['poruka'] == 'sportista je dodat') {
                          this.pojedinacServis.dodajDisciplinuZaTakmicara(this.imeIPrezime, this.disciplina, this.vodja.drzava).subscribe(res => {
                            if (res['poruka'] == 'ok') {
                              this.poruka = "Sportista je dodat";
                              this.ruter.navigate(['vodja']);
                            }
                          })
                        }
                      })
                    }
                    else {
                      this.sportistaServis.dodajSportistu(this.imeIPrezime, this.pol, this.sport, this.disciplina, this.vodja.drzava, 0, this.prazan, 0, 0).subscribe(reg => {
                        if (reg['poruka'] == 'sportista je dodat') {
                          this.pojedinacServis.dodajPojedinca(this.imeIPrezime, this.pol, this.sport, this.discipline, this.vodja.drzava, 0, this.prazan).subscribe(res => {
                            if (res['poruka'] == 'pojedinac je dodat') {
                              this.pojedinacServis.dodajDisciplinuZaTakmicara(this.imeIPrezime, this.disciplina, this.vodja.drzava).subscribe(rem => {
                                if (rem['poruka'] == 'ok') {
                                  this.zemljaServis.dohvDrzavu(this.vodja.drzava).subscribe((z: Zemlja) => {
                                    if (z) {
                                      let broj = z.brSportista + 1;
                                      this.zemljaServis.povecajSportiste(z.ime, broj).subscribe(res => {
                                        if (res['poruka'] == 'ok') {
                                          this.poruka = "Sportista je dodat";
                                          this.ruter.navigate(['vodja']);
                                        }
                                      })
                                    }
                                  })
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
                else {
                  this.ekipaServis.dohvEkipuPoSportuDrzaviIPolu(this.sport, this.vodja.drzava, this.pol).subscribe((ekipa: Ekipa) => {
                    if (ekipa) {
                      let max = parseInt(sport.maxIgraca);
                      //ekipa postoji tako da samo treba da dodam igraca ako ima meste 
                      if (ekipa.brTakmicara < max) {
                        this.sportistaServis.dohvSportistePoImenuIPrezimenu(this.imeIPrezime).subscribe((sportistiPoImenu: Sportista[]) => {
                          if (sportistiPoImenu.length > 0) {
                            for (let i = 0; i < sportistiPoImenu.length; i++) {
                              if (this.imeIPrezime == sportistiPoImenu[i].imeIPrezime && this.pol == sportistiPoImenu[i].pol && this.sport == sportistiPoImenu[i].sport
                                && this.disciplina == sportistiPoImenu[i].disciplina) {
                                this.poruka = 'Takmicar je vec dodat u tim';
                              }
                            }
                          }
                          else {
                            this.sportistaServis.dodajSportistu(this.imeIPrezime, this.pol, this.sport, this.disciplina, this.vodja.drzava, 0, this.prazan, 0, 0).subscribe(reg => {
                              if (reg['poruka'] == 'sportista je dodat') {
                                this.ekipaServis.dodajTakmicaraUEkipu(ekipa.id, this.imeIPrezime).subscribe(res => {
                                  if (res['poruka'] == 'ok') {
                                    let novi = ekipa.brTakmicara + 1;
                                    this.ekipaServis.azurirajBrojTakmicara(ekipa.id, novi).subscribe(rem => {
                                      if (rem['poruka'] == 'ok') {
                                        this.poruka = 'Sportista je uspesno dodat u ekipu';
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })
                      }
                    }
                    else {
                      //ekipa ne postoji pa prvo moram da je kreiram ekipu pa onda dodam igarca 
                      this.ekipaServis.dodajEkipu(this.sport, this.disciplina, 0, this.vodja.drzava, this.pol, this.takmicari).subscribe(res => {
                        if (res['message'] == 'ok') {
                          this.ekipaServis.dohvEkipuPoSportuDrzaviIPolu(this.sport, this.vodja.drzava, this.pol).subscribe((ekipa1: Ekipa) => {
                            if (ekipa1) {
                              this.sportistaServis.dodajSportistu(this.imeIPrezime, this.pol, this.sport, this.disciplina, this.vodja.drzava, 0, this.prazan, 0, 0).subscribe(reg => {
                                if (reg['poruka'] == 'sportista je dodat') {
                                  this.ekipaServis.dodajTakmicaraUEkipu(ekipa1.id, this.imeIPrezime).subscribe(res => {
                                    if (res['poruka'] == 'ok') {
                                      let noviBr = ekipa1.brTakmicara + 1;
                                      this.ekipaServis.azurirajBrojTakmicara(ekipa1.id, noviBr).subscribe(rem => {
                                        if (rem['poruka'] == 'ok') {
                                          this.poruka = 'Sportista je uspesno dodat u ekipu';
                                        }
                                      })
                                    }
                                  })
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              }
            })
          }
        })
      }
      else {
        this.poruka = 'Morate uneti sve podatke';
      }
    }
    else {
      this.poruka = 'Ovaj korisnik jos uvek nije odobren od strane organizatora tako da moze da unosi nove takmicare';
    }
  }
}
