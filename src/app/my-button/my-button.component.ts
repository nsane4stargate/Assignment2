import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service'


@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})

export class MyButtonComponent implements OnInit {

  /* Properties */
  flag : boolean
  
  constructor(
    private _service : MyServiceService
  ) {}

  ngOnInit() {
    this.flag = false;
    
  }

  /*
    When a user clicks the “like” button next to the image it should 
    call a member function in the my-button component which passes a 
    boolean member property to a service called my-service.
  */
 
  sendToMyService(){
    this.flag = this._service.likeImage(this.flag)
  }
}
