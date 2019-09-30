import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/messages.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  /* The messages class should contain a member property that is an array that holds messages.*/
  messages: [];

  constructor() { }

  ngOnInit() {
  }

  sendToMessdageService(){
    
  }
}
