import { Component } from '@angular/core';
import { WebsocketRunnerService } from './websocket-runner.service';
import { DataManagerService } from './data-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectJanice';
  serverStatus:string = "off";
  stompclient:any;
  destin:any = '/server/notification';
  unsub:any;

  constructor(private sock: WebsocketRunnerService, private data: DataManagerService){
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

  dataSender(data: any,sender: any){
    this.stompclient.send(sender,{},data);
  }

  setLoggedInStatus(value:boolean){
    this.sock.setloggedInStatus(value);
  }
  webSockSubscriber(){
    this.unsub = this.stompclient.subscribe(this.destin, notifications => {
    this.data.sendMessage(notifications.body);
    });  
  }

  webSockJSONSubscriber(){
    this.unsub = this.stompclient.subscribe(this.destin, notifications => {
    this.data = JSON.parse(notifications.body);
    console.log(this.data);
    });
  }
}
