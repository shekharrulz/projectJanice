import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { WebsocketRunnerService } from './websocket-runner.service';
import { FormsModule } from '@angular/forms';
import { SecurityBoxGuard } from './security-box.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [WebsocketRunnerService,SecurityBoxGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
