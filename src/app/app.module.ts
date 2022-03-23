import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HttpClientModule } from "@angular/common/http";
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { SortUsersByRankingPipe } from './pipes/sort-users-by-ranking.pipe';
import { SortUsersByNamePipe } from './pipes/sort-users-by-name.pipe';
import { SortGenericPipe } from './pipes/sort-generic.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonsComponent,
    CapitalizeFirstPipe,
    SortUsersByRankingPipe,
    SortUsersByNamePipe,
    SortGenericPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
