import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  @Input() public userList?: User[];
  @Input() public listBackgroundColor: string = "tomato" 


  constructor() { }


  ngOnInit(): void {
    console.log("ciao");
  }


                                                        //NB UTILIZZARE UN METODO DEL GENERE è SEMPRE SCONSIGLIATO RISPETTO ALL'UTILIZZO DI UN PIPE PERCHè LE CHIAMATE VENGONO FATTE PIù VOLTE!!! --> MOLTO TIME CONSUMING 
                                                        //per questo si fa un ng generate pipe + nome del pipe --> viene generato un file.pipe.ts
  capitalizeFirstLetter(word: string): string{
    console.log("pippo");                               //nonostante ci siano 7 users, pippo logga 28 volte perchè continua a controllare gli utenti
    const firstChar = word[0].toUpperCase();
    const remainingChars = word.slice(1);
    return firstChar + remainingChars;
  }



  // changeUser(){
  //   this.userList[0].name = "marta";
  // }


  // changeArray(){
  //   const newArray = [
  //     {name: "michael", ranking: 2},
  //     {name: "francesca", ranking: 1},
  //     {name: "nicolò", ranking: 3},
  //   ];
  //   this.userList = newArray;
  // }


  // addUser(){
  //   const user = {name: "andrea a", ranking: 100};
  //   this.userList.push(user);
  // }
  

}


