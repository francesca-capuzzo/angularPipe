import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'angular-pipe';

  public users: User[] = []

  // public listData: any = {};              //oggetto generico JS
  public listData: listData;                 //interfaccia (scritta infondo alla pagine)

  // public listBackgroundColor:string = "green";

  public titleColor = "yellow";



  constructor(private http: HttpClient){
    // this.listData.background = "green";    //background diventerà proprietà di listData (oggetto generico JS che si prende tutte le proprietà senza specificarne il tipo)
    // this.listData.usersArray = this.users; //usersArray diventerà proprietà di listData (oggetto generico JS che si prende tutte le proprietà senza specificarne il tipo)

    this.listData = {background: "green", usersArrayInt: this.users} //sto dicendo che this.users è linkato a this.listData
  }


  ngOnInit(): void {
    this.http.get<User[]>("./assets/users.json").subscribe(users => { //metodo per prendere le risorse dal json
      this.users = users;
      this.listData.usersArrayInt = this.users;                       //anche qui va inizializzato di nuovo l'array di users(vuoto) = alla listData.usersArrayInt
    }); 
  }




  onUserChanged(){
    // console.log("changed user");
    this.users[0].name = "marta";
    this.listData.usersArrayInt = this.users;         //resetto la reference
  }

  onArrayChanged(usersArray: User[]){
    // console.log("changed array", usersArray);
    this.users = usersArray;
    this.listData.usersArrayInt = [...this.users];    //resetto la reference e creo un altra reference clonata dell'array per essere sicuri che venga osservata sempre la reference nuova e non venga sovrascitta la vecchia 
  }                                                   //per un interfaccia si scrive come {...this.object}

  onUserAdded(user: User){
    // console.log("added user", user);
    this.users.push(user);
    this.listData.usersArrayInt = this.users;         //resetto la reference
  }


}


export interface listData{
  background: string;
  usersArrayInt: User[];
}
