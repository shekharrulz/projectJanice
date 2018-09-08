import { Component } from '@angular/core';
import { WebsocketRunnerService } from './websocket-runner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectJanice';
  serverStatus:string = "off";
  stompclient:any;
  loggedInStatus:any;
  destin:any = '/topic/notification';
  unsub:any;

  constructor(private sock: WebsocketRunnerService){
    this.webSockServiceConnect();
    this.stompclient.debug;
  }

  webSockServiceConnect(){
    this.stompclient = this.sock.connect();
    this.webSockConnect();
  }

  webSockConnect(){
    this.stompclient.connect({},frame =>{
      this.serverStatus = "on";
      this.webSockSubscriber();
    },fail=>{
      this.serverStatus = "off";
      console.log("Reconnecting WS");
      window.setTimeout(this.webSockServiceConnect(),2500);
    }
  );
  }

  dataSender(data: any){
    this.stompclient.send("/app/message",{},data);
  }

  setLoggedInStatus(value:boolean){
    this.sock.setloggedInStatus(value);
  }
  webSockSubscriber(){
    this.unsub = this.stompclient.subscribe(this.destin, notifications => {
    this.loggedInStatus = JSON.parse(notifications.body).loggedInStatus;
    console.log(this.loggedInStatus);
    });
  }
}
