import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'sortGeneric'
})
export class SortGenericPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): User[] {
    if (args.length > 0 && value.length > 0) {
      const propertyName = args[0];
      const firstUser = value[0];

      if (firstUser[propertyName]) {
        value.sort((a,b) => a[propertyName] - b[propertyName])
      }
    } else {
      return value as User[];
    }
    return value ;
  }

}
