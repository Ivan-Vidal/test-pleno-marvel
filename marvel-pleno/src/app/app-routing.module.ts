import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/views/comics/comics.component';
import { EventsComponent } from './components/views/events/events.component';
import { HomeComponent } from './components/views/home/home.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { SeriesComponent } from './components/views/series/series.component';


const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'series', component: SeriesComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
