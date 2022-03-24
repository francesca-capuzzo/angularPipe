import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {                     //unica funzione del pipe che gestisce come cambiare/utilizzare il pipe
    //console.log("pippo");                                                    //rispetto alla funzione scritta nel listComponent, pippo logga solo 7 volte (anzichè 28)
    const firstChar = value[0].toUpperCase();
    const remainingChars = value.slice(1);
    return firstChar + remainingChars;
  }

}
