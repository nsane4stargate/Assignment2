import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user_name;

  constructor() {}

  ngOnInit() {
    
  }

  addUsernameCode(value: string){
    this.user_name = value;
    (<HTMLInputElement>document.getElementById("user")).value ="";
  }
}
