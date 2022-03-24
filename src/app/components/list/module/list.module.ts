import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list.component';
import { CapitalizeFirstPipe } from 'src/app/components/list/pipes/capitalize-first.pipe';
import { SortUsersByNamePipe } from '../pipes/sort-users-by-name.pipe';




@NgModule({
  declarations: [
    ListComponent,
    CapitalizeFirstPipe,
    SortUsersByNamePipe,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
  ]
})
export class ListModule { }

/*
1- mettere nelle declarations il componente (in questo caso il list component)
2- se ci sono pipes che vengono usati solo in questo componente, crea una cartella pipe e importa tutto quello che è necessario direttamente nel component/pipes
*/
