import { UserComponent } from './user/user.component';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages/messages.component';

/* Model for Chat App */

export class Chat{
    constructor(
        public user: UserComponent,
        public message: MessageComponent,
        public messages: MessagesComponent,
    ) {}
}