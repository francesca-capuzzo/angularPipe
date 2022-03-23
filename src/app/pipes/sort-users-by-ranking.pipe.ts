import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'sortUsersByRanking'
})


export class SortUsersByRankingPipe implements PipeTransform {

  transform(value: User[], ...args: string[]): User[] {
    if (args.length > 0) {
      let order = args[0];
      if (order === "ascending") {
        return value.sort((a, b) => a.ranking - b.ranking);
      }else{
        return value.sort((a, b) => b.ranking - a.ranking);
      }
    } else{
      return value.sort((a, b) => a.ranking - b.ranking);
    }
  }

  // return value.sort((a,b) => args[0] === "ascending" ? a.ranking - b.ranking : b.ranking - a.ranking)

}
