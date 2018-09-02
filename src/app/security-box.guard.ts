import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { WebsocketRunnerService } from './websocket-runner.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityBoxGuard implements CanActivate {

  constructor(private sock: WebsocketRunnerService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.sock.isLoggedIn;
  }
}
