import { Component, OnInit } from '@angular/core';
import { Zemlja } from '../models/zemlja';
import { ZemljaService } from '../zemlja.service';

@Component({
  selector: 'app-zemlja',
  templateUrl: './zemlja.component.html',
  styleUrls: ['./zemlja.component.css']
})
export class ZemljaComponent implements OnInit {

  constructor(private zemljaServis:ZemljaService) { }

  ngOnInit(): void { 
    this.zemljaServis.dohvSveZemlje().subscribe((zemlje:Zemlja[])=>{
      if(zemlje){
        this.sveZemlje=zemlje;
      } 
    });
  }

  sveZemlje:Zemlja[]=[];
  
  itemsPerPage1: number;
  p1: number = 1;
}
