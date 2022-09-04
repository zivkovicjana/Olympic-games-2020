import { Component, OnInit } from '@angular/core';
import { Rekord } from '../models/rekord';
import { RekordService } from '../rekord.service';

@Component({
  selector: 'app-rekord',
  templateUrl: './rekord.component.html',
  styleUrls: ['./rekord.component.css']
})
export class RekordComponent implements OnInit {

  constructor(private rekordServis:RekordService) { }
 
  ngOnInit(): void {
    this.rekordServis.dohvSveRekorde().subscribe((rekordi:Rekord[])=>{
      if(rekordi){
        this.sviRekordi=rekordi;
      }
    });
  }

  sviRekordi:Rekord[];

}
