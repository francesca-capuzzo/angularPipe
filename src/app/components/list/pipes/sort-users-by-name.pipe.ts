import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'sortUsersByName'
})
export class SortUsersByNamePipe implements PipeTransform {

  transform(value: User[]): User[]{
    return value.sort((a: any, b: any) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
  }

}
