import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  hasTokenEmmite = new Subject;

  constructor() { }

  setTokrn(token) {
    localStorage.setItem('token', token);
    this.hasTokenEmmite.next(localStorage.getItem('token') !== null);
  }

  get Token() {
    return localStorage.getItem('token');
  }

  get Header() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.Token}`
    });
  }

  removeToken() {
    localStorage.removeItem('token');
    this.hasTokenEmmite.next(localStorage.getItem('token') !== null);
  }

  hasToken() {
    return localStorage.getItem('token') !== null;
  }
}
