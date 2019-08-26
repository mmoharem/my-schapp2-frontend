import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgRedux } from "@angular-redux/store";
import { Subject } from 'rxjs';
import { TokenService } from '../services/token.service';
import { IAppState } from '../store/store';

export interface compResObj {
  getRes: Response,
  getErr: Response,

  postRes: Response,
  postErr: Response,

  searchRes: Response,
  searchErr: Response
}

@Injectable({
  providedIn: 'root'
})

export class CompHttpService {

  emittReq = new Subject;
  baseUrl = 'http://127.0.0.1:8000/';
  header: HttpHeaders;

  constructor(private http: HttpClient,
              private tokenServ: TokenService,
              private ngRedux: NgRedux<IAppState>)
  {
  }

  initPath(path) {
    let url;

    if(path.includes(this.baseUrl)) {
      url = path;
    } else {
      url = `${this.baseUrl}${path}`;
    }
    return url;
  }

  // Get Request
  getRequest(path) {
    let url = this.initPath(path);

    return this.http.get(url, {headers: this.tokenServ.Header});
    // .subscribe(
      // (results: Response) => this.ngRedux.dispatch({type: GET_REQUEST_SUCCESS, result: results}),
      // (error: Response) => this.ngRedux.dispatch({type: GET_REQUEST_ERROR, error: error})
    // );
  }

  // Post Request
  postRequest(path, data) {
    let url = this.initPath(path);

    return this.http.post(url, data, {headers: this.tokenServ.Header});
    // .subscribe(
      // (results: Response) => { this.emittReq.next(<compResObj>{postRes: results}); },
      // (error: Response) => { this.emittReq.next(<compResObj>{postErr: error}); }
      // (results: Response) => this.ngRedux.dispatch({type: GET_REQUEST_SUCCESS, result: results}),
      // (error: Response) => this.ngRedux.dispatch({type: GET_REQUEST_ERROR, error: error})
    // );
  }

  // Search Request
  searchRequest(path, data?) {
    let url = this.initPath(path);

    let searchData = null;
    if(data) {
      searchData = data;
    } else {
      searchData = null;
    }

    return this.http.post(url, searchData, {headers: this.tokenServ.Header});
    // .subscribe (
    //   (results: Response) => { this.emittReq.next(<compResObj>{searchRes: results}); },
    //   (error: Response) => { this.emittReq.next(<compResObj>{searchErr: error}); }
    // );
  }

  // Put Request
  putRequest(url, data) {
    return this.http.put(`${this.baseUrl}${url}`, data, {headers: this.tokenServ.Header});
  }

  // Delete Request
  delRequest(url) {
    return this.http.delete( this.baseUrl+url, {headers: this.tokenServ.Header});
  }

  emittReqFn(response: Response) {
    this.emittReq.next(response);
  }

}
