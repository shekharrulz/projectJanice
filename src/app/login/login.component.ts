import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Subscription } from 'rxjs'
import { DataManagerService } from '../data-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  stompclient:any;
  loggedInStatus:any;
  message:any;
  subscription:Subscription;

  constructor(private sock:AppComponent, private data:DataManagerService, private router:Router){
    
  }

  loginEvent(event){
    this.loginSubscriber();
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#uname1').value;
    const password = target.querySelector('#pwd1').value;
    console.log(username,password);
    let data = JSON.stringify({
      'username' : username,
      'password' : password,
    });
    this.sock.dataSender(data,"/supplier/loginUserData");
    this.loginStatus();
  }

  private loginSubscriber(){
    this.sock.unsub.unsubscribe();
    this.sock.destin = '/server/login';
    this.sock.webSockSubscriber();
  }

  private loginStatus(){
    this.subscription = this.data.getMessage().subscribe(message => { this.message = message; 
    if(this.message.message == "loginok"){
      this.sock.setLoggedInStatus(true);
      console.log("success");
      this.router.navigate(['home']);
      }
    else{
      this.sock.setLoggedInStatus(false)
      console.log("fail");}
    });
  }
}
