import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelegatComponent } from './delegat/delegat.component';
import { LozpromenaComponent } from './lozpromena/lozpromena.component';
import { MedaljaComponent } from './medalja/medalja.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PretraziSportisteComponent } from './pretrazi-sportiste/pretrazi-sportiste.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { RekordComponent } from './rekord/rekord.component';
import { VodjaComponent } from './vodja/vodja.component';
import { ZemljaComponent } from './zemlja/zemlja.component';

const routes: Routes = [
  {path: '', component:PocetnaComponent},
  {path: 'prijava', component:PrijavaComponent},
  {path: 'organizator', component: OrganizatorComponent},
  {path: 'delegat', component: DelegatComponent},
  {path: 'vodja', component: VodjaComponent},
  {path: 'registracija', component: RegistracijaComponent},
  {path: 'lozpromena', component: LozpromenaComponent},
  {path: 'zemlja', component:ZemljaComponent},
  {path: 'medalja', component:MedaljaComponent},
  {path: 'rekord', component:RekordComponent},
  {path: 'pretrazi-sportiste', component:PretraziSportisteComponent},
  {path: '**', component: PocetnaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
