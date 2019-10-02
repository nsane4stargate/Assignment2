import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {
  constructor(
  ) {}

  /* The service method likeImage should accept a 
     boolean parameter and return a banged version 
     of the param. So every time the user clicks 
     the button this should update the member property. 
  */

  likeImage(flag: boolean){ 
    if(flag){ 
      return false
    }
    return true }
}
