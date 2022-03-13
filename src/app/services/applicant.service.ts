import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applicant } from '../components/applicant/applicant';
@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private _http: HttpClient) { }
  _url = "apply";

  sendApplication(applicant: Applicant) {
    return this._http.post<any>(this._url, applicant);
  }
  getApplication() {
    return [
      { firstname: "peter", lastname: "damine", birthday: "31/07/2021", status: 0 },
      { firstname: "peter", lastname: "damine", birthday: "31/07/2021", status: 0 },
      { firstname: "peter", lastname: "damine", birthday: "31/07/2021", status: 0 }];
  }
}
