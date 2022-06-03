import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { NavbarComponent } from './components/templates/navbar/navbar.component';
import { EventsComponent } from './components/views/events/events.component';
import { ComicsComponent } from './components/views/comics/comics.component';
import { SeriesComponent } from './components/views/series/series.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { FooterComponent } from './components/templates/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EventsComponent,
    ComicsComponent,
    SeriesComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
