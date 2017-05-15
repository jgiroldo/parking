import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GlobalService } from './global.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private gs: GlobalService, private router: Router) { }

  canActivate() {
    if (this.gs.getAuthenticated()) {
      return true
    }
    setTimeout(() => { this.router.navigate(['/login']) }, 500);
    return false;
  }
}
