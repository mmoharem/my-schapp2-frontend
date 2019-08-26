import { Injectable } from '@angular/core';
import { CompHttpService } from '../../components/comp-http.service';
import { NgRedux } from "@angular-redux/store";
import { IAppState } from '../../store/store';
import { GET_USERS_SUCCESS, GET_USERS_ERROR, GET_USER_SUCCESS, GET_PARENT_SUCCESS } from '../../store/users.store';
import { GET_PAGINAT_DATA } from '../../components/pagination/pagination.store';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private compHttp: CompHttpService,
              private ngRedux: NgRedux<IAppState>) { }

  getUsers(url) {
    this.compHttp.getRequest(url).subscribe(
      (results: Response) => {
        this.ngRedux.dispatch({type: GET_USERS_SUCCESS, users: results['data']['data']});
        this.ngRedux.dispatch({type: GET_PAGINAT_DATA, pagData: results['data'], source: 'user'});
        console.log(results);
      },
      (error: Response) => this.ngRedux.dispatch({type: GET_USERS_ERROR, error: error})
    );
  }

  addUsers(url, data) {
    this.compHttp.postRequest(url, data).subscribe(

      (results: Response) => {
        console.log(results);
        this.ngRedux.dispatch({type: GET_USER_SUCCESS, user: results['data']['data'][0]});
        // this.ngRedux.dispatch({type: GET_USERS_SUCCESS, users: results['data']['data']});
        // this.ngRedux.dispatch({type: GET_PAGINAT_DATA, pagData: results['data'], source: 'user'});
      },
      (error: Response) => {
        console.log(error);
        this.ngRedux.dispatch({type: 'GET_REQUEST_ERROR', error: error})
      }

    );
  }

  findUser(url: string) {
    this.compHttp.getRequest(url).subscribe(
      (results: Response) => {
        if(url.includes('student')) {
          console.log('student');
          this.ngRedux.dispatch({type: GET_USER_SUCCESS, user: results['data']['data']});
        } else if(url.includes('parent')) {
          console.log('parent');
          this.ngRedux.dispatch({type: GET_PARENT_SUCCESS, parent: results['data']['data'][0]});
        }
      },
      (error: Response) => console.log(error)
    );
  }

  searchUser(url, data?) {
    let isData = false;

    if(data) {
      isData = data;
    }

    this.compHttp.searchRequest(url, isData).subscribe(
      (results: Response) => {
        this.ngRedux.dispatch({type: GET_USERS_SUCCESS, users: results['data']['data']});
        this.ngRedux.dispatch({type: GET_PAGINAT_DATA, pagData: results['data'], source: 'user'});
      },
      (error: Response) => this.ngRedux.dispatch({type: 'GET_REQUEST_ERROR', error: error})
    );
  }

  deleteUser() {

  }

  updateUser() {

  }
}
