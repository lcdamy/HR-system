import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Human } from '../components/human-login/human';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  _url = "login";

  login(human: Human) {
    return this._http.post<any>(this._url, human);
  }
}
