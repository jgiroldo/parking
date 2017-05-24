// 1: Angular Imports
import { Injectable  } from '@angular/core';
import { Headers, ConnectionBackend } from '@angular/http';

// 2: External Imports
// import { SideBarObj } from './md-layout/sidebar/models/sideBarObj.model';
import { SessionModel } from './security/authentication/models/session.model';
// import { Access } from './security/permission/models/access.model';

import { AuthenticationService } from './security/authentication/services/authentication.service';


// 3: User-made Imports
import { AppConfig } from './config';

// 4: Defining the class


// @Injectable()
export class GlobalService {

  private config = new AppConfig();

  // I: SNACKBAR SESSION

  private expireSessionTime: number = 360000;
  private _header: Headers = new Headers(
    { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.getSessionToken() }
  )
  private _authenticated: boolean = false;
  private _uriBackOffice: string = this.config.webApi.urlBackOffice;
  private _userSession: SessionModel;

  // II: SnackBar-related Getters
  public getSessionToken() {
    let sessionStr = localStorage.getItem('Session');
    let token = undefined;
    if (sessionStr) {
      let authObj = JSON.parse(sessionStr);
      token = authObj.SessionID;
    }
    return token;
  }

  public getHeader(): Headers {
    return this._header;
  }

  public getUriBackOffice(endPoint: string): string {
    return this._uriBackOffice + endPoint;
  }


  public getUserSession(): any {
    let authObjStr = localStorage.getItem('isAuthenticated');
    if (authObjStr) {
      let authObj = JSON.parse(authObjStr);
      this._userSession = authObj.SessionID;
    }
    return this._userSession;
  }



  public setUserSession(userSession: any) {
    this._userSession = userSession;
  }


  // VI: Authentication
  public getAuthenticated(): boolean {
    let authObjStr = localStorage.getItem('isAuthenticated');
    if (authObjStr) {
      let authObj = JSON.parse(authObjStr);
      let actualTime = new Date().getTime();
      if (authObj.expirationTime < actualTime) {
        localStorage.removeItem('isAuthenticated');
        this._authenticated = false;
      }
      this._authenticated = true;
      // this._userSession = authObj.session;
      // this._accessList = authObj.accessList;
    }
    else
     this._authenticated = false;
    //  return true;
    return this._authenticated;
  }

  public setAuthenticated(authenticated: boolean) {
    this._authenticated = authenticated;
    if (authenticated) {
      // let time = new Date().getTime();
      let userSession = this._userSession;

      let authObj = { "session": userSession, };
      localStorage.setItem('isAuthenticated', JSON.stringify(authObj));
    }
    else {
      this.logout();
    }
  }

  public logout() {
    localStorage.removeItem('isAuthenticated');
    this._authenticated = false;
  }

}
