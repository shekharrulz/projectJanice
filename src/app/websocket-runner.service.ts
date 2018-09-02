import { Injectable } from '@angular/core';

declare var require: any;

var sockjs = require("sockjs-client");
var stomp =  require("stompjs");

@Injectable({
  providedIn: 'root'
})

export class WebsocketRunnerService {
  
  loggedInStatus: boolean = false;

  setloggedInStatus(value: boolean){
    this.loggedInStatus = value;
  }

  get isLoggedIn(){
    return this.loggedInStatus;
  }

  public connect(){

    let socket = new sockjs('http://localhost:8080/socket');
    let stompclient = stomp.over(socket);
    return stompclient;

  }
  
}
