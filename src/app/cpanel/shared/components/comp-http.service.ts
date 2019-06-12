import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { TokenService } from '../services/token.service';

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
  searchData;

  constructor(private http: HttpClient,
              private tokenServ: TokenService)
  {
  }

  // Get Request
  getRequest(url) {
    this.http.get(url, {headers: this.tokenServ.Header}).subscribe(
      (results: Response) => { this.emittReq.next(<compResObj>{getRes: results}); },
      (error: Response) => { this.emittReq.next(<compResObj>{getErr: error}); }
    );
  }

  // Post Request
  postRequest(url, data) {
    this.http.post(`${this.baseUrl}${url}`, data, {headers: this.tokenServ.Header}).subscribe(
      (results: Response) => { this.emittReq.next(<compResObj>{postRes: results}); },
      (error: Response) => { this.emittReq.next(<compResObj>{postErr: error}); }
    );
  }

  // Search Request
  searchRequest(url, data?) {

    if(data) this.searchData = data;

    this.http.post(url, this.searchData, {headers: this.tokenServ.Header}).subscribe (
      (results: Response) => { this.emittReq.next(<compResObj>{searchRes: results}); },
      (error: Response) => { this.emittReq.next(<compResObj>{searchErr: error}); }
    );
  }

  emittReqFn(response: Response) {
    this.emittReq.next(response);
  }

}
