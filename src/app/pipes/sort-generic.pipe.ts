import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'sortGeneric'
})
export class SortGenericPipe implements PipeTransform {

  transform(value: User[], ...args: string[]): User[] {  //...args funziona come un impacchettatore di argomenti --> si può dare alla funzione quanti parametri si vogliono e può essere ciclato --> va sempre messo in coda ai parametri fissi perchè non ha un numero di parametri da prendere definito 
    if (args.length > 0 && value.length > 0) {
      const propertyName = args[0];
      const firstUser = value[0];

      if (firstUser[propertyName]) {  //propertyName è come scrivere args[0] --> ed è il secondo parametro passato al pipe nell'HTML
        if (typeof firstUser[propertyName] === 'number') {
          return value.sort((a,b) => (a[propertyName] as number) - (b[propertyName] as number));
        } else {
          return value.sort((a, b) => (a[propertyName] as string).localeCompare(b[propertyName] as string));
        }
      } else {
        return value;
      }
    } else {
      return value;
    }
  }

}
