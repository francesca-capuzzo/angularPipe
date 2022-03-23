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


