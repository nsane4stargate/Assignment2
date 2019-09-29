import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyServiceService } from './my-service.service';
import { MessageComponent } from './models/message/message.component';
import { MessagesComponent } from './models/messages/messages.component';
import { UserComponent } from './models/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyImageComponent,
    MessageComponent,
    MessagesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
