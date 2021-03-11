import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UserProfile, UserService } from './user.service';
import { UtilityService } from './utility.service';

export interface Credentials {
  username: string;
  password: string;
}

export interface Response {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private httpClient: HttpClient,
    private utilityService: UtilityService,
  ) { }

  public login(credentials: Credentials): Observable<Response> {
    const url = this.utilityService.getUrl('/auth/login');
    return this.httpClient.post<Response>(url, JSON.stringify(credentials), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public logout(): Observable<Response> {
    const url = this.utilityService.getUrl('/auth/logout');
    return this.httpClient.get<Response>(url);
  }

  public getLoginStatus(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  public setLoginStatus(value: boolean): void {
    this.loggedInSubject.next(value);
  }
}
