import { Component, OnInit } from '@angular/core';
import { MedaljaService } from '../medalja.service';
import { Medalja } from '../models/medalja';

@Component({
  selector: 'app-medalja',
  templateUrl: './medalja.component.html',
  styleUrls: ['./medalja.component.css']
})
export class MedaljaComponent implements OnInit {

  constructor(private medaljaServis:MedaljaService) { }

  ngOnInit(): void {
    this.medaljaServis.dohvSveMedalje().subscribe((medalje:Medalja[])=>{
      if(medalje){
        this.sveMedalje=medalje;
      }
    });
  } 

  sveMedalje:Medalja[]=[];

  itemsPerPage1: number;
  p1: number = 1;

}
