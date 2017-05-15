import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { GlobalService } from './global.service';

@Injectable()
export class LogoutGuard implements CanActivate {
    constructor(private gs: GlobalService, private router: Router) { }

    canActivate() {
        if (!this.gs.getAuthenticated()) {
            return true
        }
        this.router.navigate(['/']);
        return false;
    }
}
/*Evita a página de login */
