import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Applicant } from '../components/applicant/applicant';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private _http: HttpClient) { }

  httpOptions = {};
  _url = "http://localhost:3000/applicant";



  sendApplication(applicant: Applicant) {
    return this._http.post<any>(this._url + "/create", applicant);
  }

  getAllApplication(token: string): Observable<Applicant[]> {
    return this._http.get<Applicant[]>(this._url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    });
  }

  getOneApplication(token: string, id: string) {
    return this._http.get(this._url + "/" + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    });
  }

  updateApplicationStatus(token: string, id: string, status: string) {
    return this._http.post<any>(this._url + "/" + id, { "status": status }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    });
  }




}
