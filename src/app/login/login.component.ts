import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { WebsocketRunnerService } from '../websocket-runner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stompclient:any;
  loggedInStatus:any;

  constructor(private sock: WebsocketRunnerService, private router: Router){
    this.stompclient = this.sock.connect();
    this.stompclient.debug;
    this.stompclient.connect({},frame =>{

      this.stompclient.subscribe('/topic/notification', notifications => {

        this.loggedInStatus = JSON.parse(notifications.body).loggedInStatus;
        console.log(this.loggedInStatus);
        if(this.loggedInStatus){
          this.sock.setloggedInStatus(true);
          this.router.navigate(['admin']); 
        }
        else{
          window.alert(this.loggedInStatus);
        }
      })
    });
  }

  ngOnInit() {
  }
  
  loginEvent(event){
    event.preventDefault();
    const target = event.target
    const username = target.querySelector('#uname1').value;
    const password = target.querySelector('#pwd1').value;
    console.log(username,password);
    let data = JSON.stringify({
      'uname' : username,
      'password' : password,
    });
    this.stompclient.send("/app/message",{},data);
  }
}
