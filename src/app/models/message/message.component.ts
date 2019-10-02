import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/messages.service'
import { MessagesComponent } from 'src/app/models/messages/messages.component'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  /* The message class should include a timestamp and text attribute */
  timestamp: number;  
  message: string;

  constructor(){
  }

  ngOnInit() {}
}
