import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'angular-pipe';

  public users: User[] = [
    {name: "fjoralba", ranking: 1},
    {name: "simone", ranking: 5},
    {name: "matteo", ranking: 4},
    {name: "marco", ranking: 3},
    {name: "lorenzo", ranking: 2},
    {name: "alessandro", ranking: 7},
    {name: "andrea", ranking: 6},
  ];

  // public listData: any = {};              //oggetto generico JS
  public listData: listData;                 //interfaccia (scritta infondo alla pagine)

  // public listBackgroundColor:string = "green";



  constructor(){
    // this.listData.background = "green";    //background diventerà proprietà di listData (oggetto generico JS che si prende tutte le proprietà senza specificarne il tipo)
    // this.listData.usersArray = this.users; //usersArray diventerà proprietà di listData (oggetto generico JS che si prende tutte le proprietà senza specificarne il tipo)

    this.listData = {background: "green", usersArrayInt: this.users} //sto dicendo che this.users è linkato a this.listData
  }




  onUserChanged(){
    // console.log("changed user");
    this.users[0].name = "marta";
    this.listData.usersArrayInt = this.users;
  }

  onArrayChanged(usersArray: User[]){
    // console.log("changed array", usersArray);
    this.users = usersArray;
    this.listData.usersArrayInt = [...this.users];    //resetto la reference e creo un altra reference clonata dell'array per essere sicuri che venga osservata sempre la reference nuova e non venga sovrascitta la vecchia 
  }                                                   //per un interfaccia si scrive come {...this.object}

  onUserAdded(user: User){
    // console.log("added user", user);
    this.users.push(user);
    this.listData.usersArrayInt = this.users;
  }


}


export interface listData{
  background: string;
  usersArrayInt: User[];
}
