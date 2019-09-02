import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';     // Ruta...agregar esta linea agregar ruta

import { PokeservicioService} from './pokeservicio.service';   //Servicio... agregar

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListapokemonComponent } from './listapokemon/listapokemon.component';
import { InfoComponent } from './info/info.component';
import { InicioComponent } from './inicio/inicio.component';
import { BulbasourComponent } from './info/bulbasour/bulbasour.component';
import { CharmanderComponent } from './info/charmander/charmander.component';
import { SquirtleComponent } from './info/squirtle/squirtle.component';
import { PikachuComponent } from './info/pikachu/pikachu.component';


const routes: Routes = [
  //{ path: 'contacto', component: ContactoComponent },
  { path: 'info/0', component: BulbasourComponent },
  { path: 'info/1', component: CharmanderComponent },
  { path: 'info/2', component: SquirtleComponent },
  { path: 'info/3', component: PikachuComponent },
  { path: 'info/:id', component: InfoComponent },         //Servicio...abrir ruta pokeinfo component con variable id 
  { path: 'ListaPokemon', component: ListapokemonComponent },
  { path: '', component: InicioComponent, pathMatch: 'full'},    // abrira con inicio
  //{ path: '**', redirectTo: '/', pathMatch: 'full'}              //ruta desconocida dirije a inicio sino
  ];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListapokemonComponent,
    InfoComponent,
    InicioComponent,
    BulbasourComponent,
    CharmanderComponent,
    SquirtleComponent,
    PikachuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)                   // agregamos esto para que funcionen la rutas
  ],
  providers: [PokeservicioService],                // Servicio...agregar dentro [] de providers
  bootstrap: [AppComponent]
})
export class AppModule { }
