import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//<--- Modulo de rutas
import { RouterModule } from '@angular/router';

// peticion http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { LoadingComponent } from './components/shared/loading/loading.component';

// importar rutas
import { ROUTES } from './app.routes';

// services
//import { SpotifyService } from './services/spotify.service';

/*
  providers:[
    SpotifyService
  ],
*/

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

// tarjetas
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(ROUTES, {useHash:true}) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ArtistaComponent, SearchComponent, NavbarComponent, NoimagePipe, TarjetasComponent, LoadingComponent, DomseguroPipe ],
  providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
