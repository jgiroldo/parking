// 1: Angular Imports
import { Injectable  } from '@angular/core';
import { Headers, ConnectionBackend } from '@angular/http';

// 2: External Imports
// import { SideBarObj } from './md-layout/sidebar/models/sideBarObj.model';
// import { UserSession } from './security/authentication/models/user-session.model';
// import { Access } from './security/permission/models/access.model';

import { AuthenticationService } from './security/authentication/services/authentication.service';


// 3: User-made Imports
import { AppConfig } from './config';

// 4: Defining the class


// @Injectable()
export class GlobalService {

  private config = new AppConfig();

  // I: SNACKBAR SESSION
  private snackBarTitle: string = "";
  private snackBarMessage: string = "";
  private snackBarClass: string = "snackclose";
  private snackBarActButton: any;
  private snackBarTime: number = 60000;
  private expireSessionTime: number = 360000;
  private _header: Headers = new Headers(
    { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.getSessionToken() }
  )
  private _authenticated: boolean = false;
  private _uriBackOffice: string = this.config.webApi.urlBackOffice;
  private _uriWorkflow: string = this.config.webApi.urlWorkflow;
  private _fileManagerUri: string = this.config.fileManagerApi.url;
  // private _userSession: UserSession;
  // private _accessList: Array<Access>;

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

  public getUriWorkflow(endPoint: string): string {
    return this._uriWorkflow + endPoint;
  }

  public getFileManagerUri(endPoint: string): string {
    return this._fileManagerUri + endPoint;
  }

  public getSnackBarTitle() {
    return this.snackBarTitle;
  }

  public getSnackBarMessage() {
    return this.snackBarMessage;
  }

  public getSnackBarClass() {
    return this.snackBarClass;
  }

  public getSnackBarActButton() {
    return this.snackBarActButton;
  }

  public getSnackBarTime() {
    return this.snackBarTime;
  }

  public getUserSession(): any {
    // let authObjStr = localStorage.getItem('isAuthenticated');
    // if (authObjStr) {
    //   let authObj = JSON.parse(authObjStr);
    //   this._userSession = authObj.session;
    // }
    // return this._userSession;
  }

  public getAccessList() {
    let authObjStr = localStorage.getItem('isAuthenticated');
    if (authObjStr) {
      let authObj = JSON.parse(authObjStr);
      // this._accessList = authObj.accessList;
    }
    // return this._accessList;
  }

  // III: SnackBar-related Setters
  public setSnackBarTitle(msgTitle: string) {
    this.snackBarTitle = msgTitle;
  }

  public setSnackBarMessage(msgText: string) {
    this.snackBarMessage = msgText;
  }

  public setSnackBarClass(classText: string) {
    this.snackBarClass = classText;
  }

  public setSnackBarActButton(act: any) {
    this.snackBarActButton = act;
  }

  public setSnackBarTime(sec: number) {
    this.snackBarTime = sec;
  }

  // public setAccessList(accessList: Array<Access>) {
  //     this._accessList = accessList;
  // }

  public setUserSession(userSession: any) {
    // this._userSession = userSession;
  }

  // IV: Other SnackBar-related methods
  public openAlert(msgTitle: string, msgText: string, actButton?: any, seconds?: number) {
    this.showProgressBar(false);

    this.setSnackBarClass("snackbar animated");
    this.setSnackBarTitle(msgTitle);
    this.setSnackBarMessage(msgText);
    if (actButton)
      this.snackBarActButton = actButton;
    if (seconds) {
      this.snackBarTime = seconds;
    } else {
      this.snackBarTime = 60000;
    }
  }

  // V: Loading Session
  public showProgressBar(show: boolean) {
    if (show) {
      document.getElementById('progressBar').style.display = '-webkit-box';
    }
    else {
      document.getElementById('progressBar').style.display = 'none';
    }
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
     return true;
    // return this._authenticated;
  }

  public setAuthenticated(authenticated: boolean) {
    this._authenticated = authenticated;
    if (authenticated) {
      // let time = new Date().getTime();
      // let userSession = this._userSession;

      // let authObj = { "session": userSession, };
      // localStorage.setItem('isAuthenticated', JSON.stringify(authObj));
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
