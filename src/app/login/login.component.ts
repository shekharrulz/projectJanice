import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  stompclient:any;
  loggedInStatus:any;

  constructor(private sock:AppComponent){
    
  }

  loginEvent(event){
    this.sock.unsub.unsubscribe();
    this.sock.destin = '/topic/google';
    this.sock.webSockSubscriber();
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#uname1').value;
    const password = target.querySelector('#pwd1').value;
    console.log(username,password);
    let data = JSON.stringify({
      'uname' : username,
      'password' : password,
    });
    this.sock.dataSender(data);
    
  }
}
