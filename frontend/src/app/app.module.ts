import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrijavaComponent } from './prijava/prijava.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { DelegatComponent } from './delegat/delegat.component';
import { VodjaComponent } from './vodja/vodja.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { LozpromenaComponent } from './lozpromena/lozpromena.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ZemljaComponent } from './zemlja/zemlja.component';
import { MedaljaComponent } from './medalja/medalja.component';
import { RekordComponent } from './rekord/rekord.component';
import { PretraziSportisteComponent } from './pretrazi-sportiste/pretrazi-sportiste.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    PrijavaComponent,
    OrganizatorComponent,
    DelegatComponent,
    VodjaComponent,
    RegistracijaComponent,
    LozpromenaComponent,
    PocetnaComponent,
    ZemljaComponent,
    MedaljaComponent,
    RekordComponent,
    PretraziSportisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
