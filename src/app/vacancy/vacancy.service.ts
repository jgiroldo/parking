import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GlobalService} from '../global.service';
// import { User } from '../../../operational/register/user/models/user.model';
// import { Authentication } from '../models/authentication.model';

@Injectable()
export class VacancyService {
  constructor(private http: Http, private gs: GlobalService) { }

  private apiUrl = this.gs.getUriBackOffice('/Login');// URL para web api

  private header = this.gs.getHeader();
  public observable: Observable<any>;



  saveNewEntry(newEntry: any) {
    return this.http.post(this.apiUrl + '/save', JSON.stringify(newEntry), { headers: this.header }).map((res: Response) => res.json())
  }

  closeStay(closeEntry: any) {
    return this.http.post(this.apiUrl + '/close', JSON.stringify(closeEntry), { headers: this.header }).map((res: Response) => res.json())

  }

  searchStay(placa: string) {
    let search: URLSearchParams = new URLSearchParams();
    search.set('placa', placa);
    return this.http.get(this.apiUrl + "/Placa", { search: search }).map((res: Response) => res.json());

  }

  saveNewReport(newEntry: any) {
    return this.http.post(this.apiUrl + '/save', JSON.stringify(newEntry), { headers: this.header }).map((res: Response) => res.json())
  }

}
