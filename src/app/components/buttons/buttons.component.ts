import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output() public userChanged = new EventEmitter<any>();     //output --> genera eventi --> questo di tipo <any>
  @Output() public arrayChanged = new EventEmitter<User[]>(); //output --> genera eventi --> questo di tipo <User[]>
  @Output() public userAdded = new EventEmitter<User>();      //output --> genera eventi --> questo di tipo <User>

  constructor() { }

  ngOnInit(): void {
    console.log("ciao");
  }


  changeUser(){
    this.userChanged.emit();
  }


  changeArray(){
    const newArray: User[] = [
      {name: "michael", ranking: 2},
      {name: "francesca", ranking: 1},
      {name: "nicolò", ranking: 3},
    ];
    this.arrayChanged.emit(newArray);
  }


  addUser(){
    const user: User = {name: "andrea a", ranking: 100};
    this.userAdded.emit(user);
  }
  
}
