import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UtilityService } from './utility.service';
import { Response } from './auth.service';

export interface PasswordChange {
  userName: string;
  currentPassword: string;
  newPassword: string;
  conPassword: string;
}
export interface UserProfile {
  firstName: string;
  lastName: string;
  username: string;
  roles: string[];
}
export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  username?: string;
  password: string;
  emailAddress: string;
  gender: string;
  city: string;
  state: string;
  roles?: string[];
  status?: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userProfileSubject = new BehaviorSubject<UserProfile>(null);

  constructor(
    private httpClient: HttpClient,
    private utilityService: UtilityService
  ) { }

  public getUserProfile(): Observable<UserProfile> {
    return this.userProfileSubject.asObservable();
  }

  public setUserProfile(userProfile: UserProfile): void {
    this.userProfileSubject.next(userProfile);
  }

  public loadUserProfile(): Observable<UserProfile> {
    const url = this.utilityService.getUrl('/auth/user-profile');
    return this.httpClient.get<UserProfile>(url).pipe(
      tap((userProfile: UserProfile) => {
        this.setUserProfile(userProfile);
      })
    );
  }

  public clearUserProfile(): void {
    this.userProfileSubject.next(null);
  }

  public getUsers(): Observable<User[]> {
    const url = this.utilityService.getUrl(`/users/`);
    return this.httpClient.get<User[]>(url);
  }

  public getUser(userId: string): Observable<User> {
    const url = this.utilityService.getUrl(`/users/${userId}`);
    return this.httpClient.get<User>(url);
  }

  public addUser(user: User): Observable<Response> {
    const url = this.utilityService.getUrl('/users/');
    return this.httpClient.post<Response>(url, JSON.stringify(user), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public deleteUser(username: string): Observable<Response> {
    const url = this.utilityService.getUrl(`/users/${username}`);
    return this.httpClient.delete<Response>(url);
  }

  public updatePassword(user:PasswordChange): Observable<Response>{
    const url=this.utilityService.getUrl('/users/update-password');
    return this.httpClient.post<Response>(url, JSON.stringify(user), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
