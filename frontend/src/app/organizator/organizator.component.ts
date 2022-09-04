import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Delegat } from '../models/delegat';
import { Korisnik } from '../models/korisnik';
import { Pojedinac } from '../models/pojedinac';
import { Rekord } from '../models/rekord';
import { Sport } from '../models/sport';
import { Sportista } from '../models/sportista';
import { SportIDisciplina } from '../models/sport_i_disciplina';
import { Takmicenje } from '../models/takmicenje';
import { PojedinacService } from '../pojedinac.service';
import { RekordService } from '../rekord.service';
import { SportIDisciplinaService } from '../sport-i-disciplina.service';
import { SportService } from '../sport.service';
import { SportistaService } from '../sportista.service';
import { TakmicenjeService } from '../takmicenje.service';

@Component({
  selector: 'app-organizator',
  templateUrl: './organizator.component.html',
  styleUrls: ['./organizator.component.css']
})
export class OrganizatorComponent implements OnInit {

  constructor(private sportIdisciplinaServis: SportIDisciplinaService,
    private takmicenjeServis: TakmicenjeService,
    private korisnikServis: KorisnikService,
    private sportistaServis: SportistaService,
    private rekordServis: RekordService,
    private sportServis: SportService,
    private ruter: Router) { }

  ngOnInit(): void {
    this.organizator = JSON.parse(localStorage.getItem('ulogovan'));
    if(this.organizator==null){
      this.ruter.navigate(['']);
    }
    if(this.organizator.tip!='organizator'){
      localStorage.removeItem('ulogovan');
      this.ruter.navigate(['']);
    }
    this.sportServis.dohvSveSportove().subscribe((sportovi: Sport[]) => {
      if (sportovi) {
        this.sviSportovi = sportovi;
      }
    });
    this.sportIdisciplinaServis.dohvatiSveSportoveIDisc().subscribe((spIdis: SportIDisciplina[]) => {
      this.sviSportoviIDiscipline = spIdis
    });
    this.korisnikServis.dohvatiDelegateZaDelegiranje().subscribe((del: Delegat[]) => {
      if (del) {
        for (let i = 0; i < del.length; i++) {
          if (del[i].odobren == "1") {
            this.sviDelegati.push(del[i]);
          }
        }
      }
    });
  }
  organizator:Korisnik;

  sport: string;
  disciplina: string;
  pol: string;
  vrsta: string;
  minIgraca: number;
  maxIgraca: number;

  sviSportovi: Sport[] = [];
  sveDiscipline: SportIDisciplina[];
  sviDelegati: Delegat[] = [];

  poruka: string;
  rekordi: Rekord[];

  sportIDisciplina: boolean;

  postaviS() {
    this.sportIDisciplina = true;
  }

  skloniS() {
    this.sportIDisciplina = false;
  }

  neodobreni() {
    this.korisnikServis.dohvKorisnikeKojiNisuOdobreni().subscribe((korisnici: Korisnik[]) => {
      if (korisnici) {
        this.neodobreniKorisnici = korisnici;
      }
    });
  }

  skloni() {
    this.neodobreniKorisnici = null;
  }

  sviSportoviIDiscipline: SportIDisciplina[] = [];


  dodajSport() {
    for (let i = 0; i < this.sviSportoviIDiscipline.length; i++) {
      if (this.sviSportoviIDiscipline[i].sport == this.sport && this.sviSportoviIDiscipline[i].disciplina == this.disciplina
        && this.sviSportoviIDiscipline[i].pol == this.pol) {
        this.poruka = "Vec postoji ovaj sport i disciplina.";
        return;
      }
    }
    let brojac = 0;
    for (let i = 0; i < this.sviSportovi.length; i++) {
      if (this.sviSportovi[i].sport == this.sport) {
        brojac++;
      }
    }
    if (brojac > 0) {
      this.sportIdisciplinaServis.dodajSport(this.sport, this.disciplina, this.pol, this.vrsta, this.minIgraca, this.maxIgraca).subscribe(reg => {
        if (reg['poruka'] == 'sport je dodat') {
          this.poruka = "Uspesno dodavanje";
        } else {
          this.poruka = "Neuspesno dodavanje";
        }
      })
    }
    else {
      this.sportServis.dodajSport(this.sport, this.vrsta).subscribe(res => {
        if (res['poruka'] == 'sport je dodat') {
          this.sportIdisciplinaServis.dodajSport(this.sport, this.disciplina, this.pol, this.vrsta, this.minIgraca, this.maxIgraca).subscribe(reg => {
            if (reg['poruka'] == 'sport je dodat') {
              this.poruka = "Uspesno dodavanje";
            } else {
              this.poruka = "Neuspesno dodavanje";
            }
          })
        }
      })
    }
  }

  dohvRekorde() {
    this.rekordServis.dohvSveRekorde().subscribe((rek: Rekord[]) => {
      if (rek) {
        this.rekordi = rek;
      }
    })
  }

  skloniRekorde() {
    this.rekordi = null;
  }

  sport1: string;
  disciplina1: string;
  format: string;
  pol1: string;
  vrsta1: string;
  lokacija: string;
  ucesnici: String[];
  delegati: String[];

  prazan: string = "";

  poruka1: string;
  porukaTakmicenje: string;
  individualniTakmicari: Sportista[];

  nadjiDiscipline() {
    this.sportIdisciplinaServis.dohvSportIPol(this.sport1).subscribe((sportovi: SportIDisciplina[]) => {
      if (sportovi) {
        this.sveDiscipline = [];
        for (let i = 0; i < sportovi.length; i++) {
          this.sveDiscipline[i] = sportovi[i];
        }
      }
    })
  }

  delegatNeValja: string;

  takmicenje: boolean;

  postaviT() {
    this.takmicenje = true;
  }

  skloniT() {
    this.takmicenje = false;
  }

  poruka5:string="";

  dodajTakmicenje() {
    if (this.vrsta1 == 'individualni') {
      this.takmicenjeServis.dohvSve().subscribe((takmicenja: Takmicenje[]) => {
        if (takmicenja) {
          for (let i = 0; i < takmicenja.length; i++) {
            if (takmicenja[i].sport == this.sport1 && takmicenja[i].disciplina == this.disciplina1 && takmicenja[i].pol == this.pol1) {
              this.porukaTakmicenje = "Ovo takmicenje vec postoji u sistemu";
            }
          }
          if (this.porukaTakmicenje == "Ovo takmicenje vec postoji u sistemu") {
            //this.poruka5="Ovo takmicenje vec postoji u sistemu";
            return;
          }
          else {
            let sportisti: Array<String>;
            sportisti = [];
            if (this.ucesnici.length > 8) {
              this.porukaTakmicenje = "Ne mozete dodati vise od 8 takmicara";
              return;
            }
            else {
              for (let i = 0; i < this.ucesnici.length; i++) {
                sportisti.push(this.ucesnici[i]);
              }
            }
    
            let delegati2: Array<String>;
            delegati2 = [];
            for (let i = 0; i < this.delegati.length; i++) {
              delegati2.push(this.delegati[i]);
            }
    
            this.takmicenjeServis.dodajTakmicenje(this.sport1, this.disciplina1, this.format, this.pol1, this.vrsta1, this.prazan, this.prazan, this.prazan, this.prazan, this.lokacija, sportisti, delegati2).subscribe(res => {
              if (res['poruka'] == 'takmicenje je dodato') {
                for (let i = 0; i < delegati2.length; i++) {
                  let ime2 = delegati2[i].split(' ')[0];
                  let prezime2 = delegati2[i].split(' ')[1];
                  this.korisnikServis.dohvDelImeIPrezime(ime2, prezime2).subscribe((del: Delegat) => {
                    let username2 = del.username;
                    let noviBroj: number;
                    noviBroj = del.brojDelegiranja + 1;
                    this.korisnikServis.povecajBrojDelegiranja(username2, noviBroj).subscribe(rem => {
                      if (rem['poruka'] == 'ok') {
                        this.porukaTakmicenje = "Takmicenje je dodato";
                      }
                    })
                  })
                }
              }
            })
          }
        }
      })
      
    }
  }

  postaviPojedince() {
    this.sportistaServis.dohvPolSportDisc(this.pol1, this.sport1, this.disciplina1).subscribe((pojedinci: Sportista[]) => {
      if (pojedinci) {
        this.individualniTakmicari = [];
        let j = 0;
        for (let i = 0; i < pojedinci.length; i++) {
          if (pojedinci[i].disciplina == this.disciplina1) {
            this.individualniTakmicari[j] = pojedinci[i];
            j++;
          }
        }
      }
    })
  }

  neodobreniKorisnici: Korisnik[];
  poruka3: string;
  delegatPoruka: string;
  poruka4: string;

  odobriKorisnika(username, tip, ime, prezime, drzava) {
    this.korisnikServis.dohvKorisnikeKojiSuOdobreni().subscribe((korisnici: Korisnik[]) => {
      if (korisnici) {
        let broj = 0;
        for (let i = 0; i < korisnici.length; i++) {
          if (korisnici[i].drzava == drzava && korisnici[i].tip == 'vodja_delegacije') {
            broj++;
          }
        }
        if (broj == 0) {
          this.korisnikServis.odobriKorisnika(username, "1").subscribe(res => {
            if (res['poruka'] == 'ok') {
              if (tip == 'delegat') {
                this.korisnikServis.dodajDelegata(username, ime, prezime, 0, "1").subscribe(res => {
                  if (res['poruka'] == 'delagat je dodat') {
                    this.delegatPoruka = 'Delegat je dodat';
                    this.korisnikServis.dohvKorisnikeKojiNisuOdobreni().subscribe((korisnici: Korisnik[]) => {
                      this.neodobreniKorisnici = korisnici;
                      this.poruka3 = 'Uspesno';
                      this.ruter.navigate(['organizator']);
                    })
                  }
                })
              }
              else {
                this.korisnikServis.dohvKorisnikeKojiNisuOdobreni().subscribe((korisnici: Korisnik[]) => {
                  this.neodobreniKorisnici = korisnici;
                  this.poruka3 = 'Uspesno';
                  this.ruter.navigate(['organizator']);
                })
              }
            }
            else {
              this.poruka3 = 'Neuspesno';
            }
          })
        }
        else{
          this.poruka3='Vec je dodat vodja delegacije za ovu drzavu';
        }
      }
    })

  }
}

