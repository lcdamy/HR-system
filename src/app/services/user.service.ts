import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Human } from '../components/human-login/human';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();

  constructor(private _http: HttpClient) {
    this.loadUserInfo();
  }

  _url = "https://lc-job-application-backend.herokuapp.com/auth/login";

  userLogin(login: Human): Observable<boolean> {
    if (login && login.email && login.password) {
      return this._http.post(this._url, login).pipe(
        map((data: any) => {
          if (!data) {
            return false;
          }
          localStorage.setItem('jwt', data.jwt);
          const decodedUser = this.jwtHelper.decodeToken(data.access_token);
          this.userInfo.next(decodedUser);
          return true;
        })
      );
    }
    return of(false);
  }

  loadUserInfo() {
    let userdata = this.userInfo.getValue();
    if (!userdata) {
      const access_token = localStorage.getItem('jwt');
      if (access_token) {
        userdata = this.jwtHelper.decodeToken(access_token);
        this.userInfo.next(userdata);
      }
    }
  }

}
