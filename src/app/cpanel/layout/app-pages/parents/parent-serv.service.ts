import { Injectable } from '@angular/core';
import { userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';
import { CompHttpService } from 'src/app/cpanel/shared/components/comp-http.service';
import { NgRedux } from "@angular-redux/store";
import { IAppState } from 'src/app/cpanel/shared/store/store';
import { GET_SIBLINGS_SUCCESS } from 'src/app/cpanel/shared/store/users.store';

export interface Parent {
  id: number,
  relation: string,
  edu_degree: string,
  job: string,
  company_name: string,
  profession: string,
  position: string,
  work_phone: number,
  student_id: number
}

@Injectable({
  providedIn: 'root'
})

export class ParentServService {

  userStud: userStudData = null;
  parents = null;
  siblings = null;
  parent: Parent = null;
  father: Parent = null;
  mother: Parent = null;
  relation: string = null;
  gender: string = null;
  student_id: number = null;

  constructor(private compHttp: CompHttpService,
              private ngRedux: NgRedux<IAppState>) { }

  initParent(user: userStudData) {
    let parents = user.student.parents;
    this.userStud = user;
    console.log('user');
    console.log(user);

    if(parents.length > 0) {
      this.parents = parents;

      parents.forEach(parent => {
        if(parent.relation === 'father') { this.father = parent; }
        if(parent.relation === 'mother') { this.mother = parent; }
      });
    }
  }

  initServ() {
    this.parents = null;
    this.relation = null;
    this.gender = null;
    this.student_id = null;
  }

  addSiblingRequest(data) {
    this.compHttp.postRequest('parents/siblings' ,data).subscribe(
      (results: Request) => console.log(results),
      (error: Request) => console.log(error)
    );
  }

  getSiblingsRequest(id) {
    this.compHttp.getRequest(`parents/siblings/${id}`).subscribe(
      (results: Request) => {
        console.log(results);
        this.ngRedux.dispatch({type: GET_SIBLINGS_SUCCESS, siblings: results['data']['data']});
        this.siblings =results['data']['data'];
      },
      (error: Request) => console.log(error)
    );
  }
}
