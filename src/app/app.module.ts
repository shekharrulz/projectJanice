import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WebsocketRunnerService } from './websocket-runner.service';
import { FormsModule } from '@angular/forms';
import { SecurityBoxGuard } from './security-box.guard';
import { UiComponent } from './ui/ui.component';
import { DataManagerService } from './data-manager.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgxGaugeModule } from 'ngx-gauge';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxGaugeModule
    
  ],
  providers: [WebsocketRunnerService,DataManagerService,SecurityBoxGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
