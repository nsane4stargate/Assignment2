import { Component } from '@angular/core';
import { MessagesComponent } from './models/messages/messages.component';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mydist';
  all_messages: MessagesComponent

  constructor(
    private _service : MessagesService
    ){
      /* this.getMessages();*/
    }

    getMessages(){
      this.all_messages = this._service.messages;
  }
}
