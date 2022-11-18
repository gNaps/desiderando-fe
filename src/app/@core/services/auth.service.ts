import { Injectable } from '@angular/core';
import { KEY_STORAGE_USER } from '../constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  private currentUser: any = {};
  constructor() {
    this.currentUser = JSON.parse(
      localStorage.getItem(KEY_STORAGE_USER) || '{}'
    );
  }

  getCurrentUser() {
    return this.currentUser;
  }
  setCurrentUser(data: any) {
    this.currentUser = { ...data };
    localStorage.setItem(KEY_STORAGE_USER, JSON.stringify(data));
  }

  getJwtToken() {
    return this.currentUser.jwt;
  }

  signOut() {
    localStorage.removeItem(KEY_STORAGE_USER);
  }
}
