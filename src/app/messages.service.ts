import { Injectable } from '@angular/core';
import { UserComponent } from './models/user/user.component';
import { MessageComponent } from './models/message/message.component';
import { MessagesComponent } from './models/messages/messages.component';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }
}
