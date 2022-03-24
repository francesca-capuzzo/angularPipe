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
import { BlackBackgroundDirective } from './directives/black-background.directive';
import { BackgroundDirective } from './directives/background.directive';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonsComponent,
    CapitalizeFirstPipe,
    SortUsersByRankingPipe,
    SortUsersByNamePipe,
    SortGenericPipe,
    BlackBackgroundDirective,
    BackgroundDirective,

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
