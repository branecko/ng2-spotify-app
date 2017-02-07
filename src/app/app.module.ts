import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AboutComponent }  from './components/about/about.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { SearchComponent }  from './components/search/search.component';
import { ArtistComponent }  from './components/artist/artist.component';
import { AlbumComponent }  from './components/album/album.component';

import { routing }  from './app.router';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  ],
  declarations: [
      AboutComponent,
      AlbumComponent,
      AppComponent,
      ArtistComponent,
      NavbarComponent,
      SearchComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
