import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from "@angular-redux/store";
import { IAppState } from '../store/store';
import { GET_GRADES } from '../../layout/app-pages/school/sch-grade/store/grade.store';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  emitGrade = new Subject;

  baseUrl = 'http://localhost:8000';

  loggedIn: boolean = false;
  loggedInStateEmit = new Subject();
  emitError = new Subject();

  constructor(private http: HttpClient,
              private ngRedux: NgRedux<IAppState>) {}

  signIn(data) {
    return this.http.post(`${this.baseUrl}/oauth/token`, data);
  }

  adminRedirect(header) {
    return this.http.get(`${this.baseUrl}/login`, {headers: header});
  }

  signUp(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  getRequest(link) {
    return this.http.get(`${this.baseUrl}/${link}`);
  }

  postRequest(link, data) {
    return this.http.post(`${this.baseUrl}/${link}`, data);
  }

  getGrades() {
    this.getRequest('school/grade')
      .subscribe(
        // grades => this.ngRedux.dispatch({type: GET_GRADES, grades: grades}),
        // error => this.handleError(error),
      )
    ;
  }

  handleError(error) {
    const errorConst = error.error.error;
    this.emitError.next(errorConst);
  }

  sendPassResetLink(data) {
    return this.http.post(`${this.baseUrl}/sendPassResetLink`, data);
  }

  isLoggedIn() {
    // this.loggedIn = localStorage.getItem('token') !== null;
    // // this.loggedIn = localStorage.getItem('token') !== null;
    // this.loggedInStateEmit.next(this.loggedIn);
    // console.log(this.loggedIn);
    return localStorage.getItem('token') !== null;
  }

}
