import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';




@NgModule({
  declarations: [
    CapitalizeFirstPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CapitalizeFirstPipe
  ]
})
export class SharedModule { }


/*
IMPORTO QUI TUTTI I PEZZI CHE UTILIZZO O POSSO UTILIZZARE PER DIVERSI COMPONENTI -> è lo stesso di metterlo direttamente nell'app.module però in questo modo i componenti possono essere esportati e riutizzati senza bisogno di copiare altra roba */