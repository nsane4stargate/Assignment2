import { Component, OnInit, Input } from '@angular/core';
import { MessagesComponent } from 'src/app/models/messages/messages.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @Input() message:string;
  newUserFlag: boolean;

  constructor() { }

  ngOnInit() {
  }

}
