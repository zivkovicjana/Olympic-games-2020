import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-lozpromena',
  templateUrl: './lozpromena.component.html',
  styleUrls: ['./lozpromena.component.css']
})
export class LozpromenaComponent implements OnInit {

  constructor(private korisnikServis: KorisnikService,
    private ruter: Router) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('ulogovan'));
  }
  
  user:Korisnik;
  username:string;
  password:string;
  newPassword:string;
  newPasswordAgain:string;

  poruka:string;

  promeniLozinku(){
    /*PROVERA LOZINKE*/
    this.provera();
    if(this.poruka=='ok'){
      if(this.newPassword==this.newPasswordAgain){
        this.korisnikServis.promenaLozinke(this.username,this.password,this.newPassword).subscribe(res=>{
          if(res['poruka']=="Lozinka je uspesno promenjena"){
            this.poruka="Loznika je uspesno promenjena";
            //localStorage.clear();
            this.ruter.navigate(['']);
          }
        })
      }
      else{
        this.poruka="Nova i potvrda nove lozinke se ne poklapaju";
      }
    }
    else{
      this.poruka='Lozinka nije u odgovarajucem formatu';
    }  
  }

  provera() {
    const reg = /(.)\1\1\1/;
    if (reg.test(this.newPassword)) {
      this.poruka = "Ponavlja se vise od 3 slova";
      return;
    }
    else {
      const regex = new RegExp("^(?=(.*[a-z]){3,})(?=.*[A-Z])(?=(.*[0-9]){2,})(?=(.*[!@#\$%\^&\*\/]){2,})(?=.{8,12})");
      if (regex.test(this.newPassword) && (/[a-z]/.test(this.newPassword[0]) || /[A-Z]/.test(this.newPassword[0]))) {
        this.poruka = 'ok';
      }
      else {
        this.poruka = 'not ok';
      }
    }
  }
}
