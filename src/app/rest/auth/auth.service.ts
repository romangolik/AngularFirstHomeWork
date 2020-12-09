import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './userinfo';
import { Observable } from 'rxjs';
import { AuthorizationInfo } from './authorizationinfo';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  authorization(userInfo: UserInfo): Observable<AuthorizationInfo> {
    return this.http.post<AuthorizationInfo>('https://c2f67f1e54ad.ngrok.io/login', userInfo);
  }
}
