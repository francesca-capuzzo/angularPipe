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
import { ResizingDirective } from './directives/resizing.directive';
import { ExistDirective } from './directives/exist.directive';
import { StringDirective } from './directives/string.directive';



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
    ResizingDirective,
    ExistDirective,
    StringDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] //modulo di boot dell'applicazione --> <app-root> che è nell'index.html
  /*
  in molti casi serve più di un modulo per il boot:
  1- per esportare componenti utili in altre applicazioni
  2- per avere meno imports nell'app module -> codice più leggibile ed elegante
  3- per il LAZY LOADING -> l'app angular viene impacchettata in unico .js quando viene compressa, e diventa un modulo molto pesante che il browser deve scaricare prima di avviarsi --> vengono scomposte le pagine e caricate singolarmente e finchè l'utente non fa il routing ad un altra pagina, quella non viene caricata
  */ 
})
export class AppModule { }
