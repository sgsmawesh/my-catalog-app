import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthUser } from '../models/auth-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user = new BehaviorSubject<AuthUser>({} as AuthUser);
  private isAuthenticated: boolean = false;
  user$ = this.user.asObservable();
  constructor() { }



  setAuthUserData(data: AuthUser): void {
    this.user.next(data);
    localStorage.setItem('user', JSON.stringify(data));
    this.isAuthenticated = true;
  }

  setAuthUserDataFromStorage(): void {
    const user = localStorage.getItem('user');
    if (user) {
      const userJson: AuthUser = JSON.parse(user);
      this.setAuthUserData(userJson);
    }
  }

  logout(): void {
    this.user.next({} as AuthUser);
    localStorage.removeItem('user');
    this.isAuthenticated = false;

  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }

}
