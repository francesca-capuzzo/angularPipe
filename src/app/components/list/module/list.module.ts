import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list.component';
import { SortUsersByNamePipe } from '../pipes/sort-users-by-name.pipe';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    ListComponent,
    SortUsersByNamePipe,

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListComponent,
  ]
})
export class ListModule { }

/*
1- mettere nelle declarations il componente (in questo caso il list component)
2- se ci sono pipes che vengono usati solo in questo componente, crea una cartella pipe e importa tutto quello che è necessario direttamente nel component/pipes
3- aggiungere la sezione EXPORTS sotto agli imports e aggiungere il nome del component da esportare --> in modo che poi possa essere importato dall'app.module

*/
