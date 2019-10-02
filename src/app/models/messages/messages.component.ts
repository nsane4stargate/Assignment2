import { Component, OnInit } from '@angular/core';
import { MessageComponent } from 'src/app/models/message/message.component'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  /* The messages class should contain a member property that is an array that holds messages.*/
  messages: MessageComponent[];

  constructor() {}

  ngOnInit() {
  }

}
