import { Injectable } from '@angular/core';
import { MessageComponent } from './models/message/message.component';
import { MessagesComponent } from './models/messages/messages.component';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  message: MessageComponent;
  messages: MessagesComponent = new MessagesComponent;

  constructor() {}

  makeAndAppendMessages(incoming_message:string){
    this.message = new MessageComponent;
    this.message.message = incoming_message;
    this.messages.messages.push(this.message);
  }
}
