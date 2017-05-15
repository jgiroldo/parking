import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GlobalService} from '../../../global.service';
// import { User } from '../../../operational/register/user/models/user.model';
import { Authentication } from '../models/authentication.model';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http, private gs: GlobalService) { }

  private apiUrl = this.gs.getUriBackOffice('/Login');// URL para web api

  private header = this.gs.getHeader();
  public observable: Observable<any>;

  login(objAuth: Authentication) {
    return this.http.post(this.apiUrl, JSON.stringify(objAuth), { headers: this.header }).map((res: Response) => res.json())
  }

  generateSession() {
    // return this.http.get(this.apiUrl + "/GetNewSession", { headers: this.header });
  }

  generateCaptcha() {
    // return this.http.get(this.apiUrl + '/GetNewCaptcha', { headers: this.header }).map((res: Response) => res.json());
  }

  getUserName(user: string) {
    // let search: URLSearchParams = new URLSearchParams();
    // search.set('userName', user);
    // return this.http.get(this.apiUrl + "/GetUserName", { search: search }).map((res: Response) => res.json());
  }

  getUserNextSteps() {
    // return this.http.get(this.apiUrl + '/GetStepsByUserID', { headers: this.header }).map((res: Response) => res.json());
  }

  loginValidation(objAuth: Authentication) {
    // return this.http.post(this.apiUrl + '/Authenticate', JSON.stringify(objAuth), { headers: this.header }).map((res: Response) => res.json())
  }

  logout() {
    this.gs.logout();
    return this.http.post(this.apiUrl + "/Logout", { headers: this.header });
  }

}
