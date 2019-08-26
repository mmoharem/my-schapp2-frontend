import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { userStudData } from '../../interfaces/app-interface';
import { Router } from '@angular/router';
import { StudTableService } from './stud-table.service';
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from '../../store/store';
import { Subscription } from 'rxjs';
import { GET_USER_SUCCESS, IUserState } from '../../store/users.store';
import { ParentServService } from 'src/app/cpanel/layout/app-pages/parents/parent-serv.service';

// export interface tableCol {
//   id: 'id', name: 'name', gender: 'gender', birthDate: 'birthDate', grade: 'grade',
//     address: 'address', fees: 'fees', payment: 'payment', image: 'image', show: 'show', edite: 'edite', delete: 'delete'
// }

@Component({
  selector: 'studTable',
  templateUrl: './stud-table.component.html',
  styleUrls: ['./stud-table.component.scss']
})
export class StudTableComponent implements OnInit, OnDestroy {

  @Input() dataInput = {
    type: '',
    tableCol: ''
  };

  @select(store => store.users) usersStore;

  subscribeUser: Subscription;

  tableData: userStudData[] = null;

  parent = null;
  noParents = null;

  constructor(private stdTableSer: StudTableService,
              private router: Router,
              private ngRedux: NgRedux<IAppState>,
              private parentServ: ParentServService) { }

  ngOnInit() {
    this.subscribeUser = this.usersStore.subscribe((usersStore: IUserState) => {
      if(this.dataInput.type !== 'siblings' && usersStore.users.length > 0 && this.tableData !== usersStore.users) {
        this.tableData = usersStore.users;
        this.filterSiblings();

      } else if(this.dataInput.type === 'siblings' && usersStore.siblings.length > 1 && this.tableData !== usersStore.siblings) {
        this.tableData = usersStore.siblings;
      }

      return false;
    });

    // this.subscribeParent = this.parentStore.subscribe(parent => this.parent = parent);
    // this.ngRedux.subscribe(() => this.ngRedux.getState().request.result)
    // this.obsStore.subscribe(() => this.obsStore.getState());
  }

  ngOnDestroy() {
    this.subscribeUser.unsubscribe();
  }

  update(student: userStudData) {
    if(this.dataInput.type === 'student') {
      this.router.navigate(['/students/testupdate', 'id']);
      this.stdTableSer.onUpdate(student);
    } else

    if(this.dataInput.type === 'employee') {
      this.router.navigate(['/students/update', 'id']);
      this.stdTableSer.onUpdate(student);
    } else

    if(this.dataInput.type === 'teacher') {
      this.router.navigate(['/students/update', 'id']);
      this.stdTableSer.onUpdate(student);
    };

  }

  studAttend(user: userStudData) {
    if(this.dataInput.type === 'student') {
      this.router.navigate(['/students/studattendance', user.student.id]);
      this.stdTableSer.onUpdate(user);
    };
  }

  payments(user: userStudData) {
    this.ngRedux.dispatch({type: GET_USER_SUCCESS, user: user});
    this.router.navigate(['/students/payments'])
  }

  parents(user: userStudData) {
    this.ngRedux.dispatch({type: GET_USER_SUCCESS, user: user});
    this.router.navigate(['/parents']);
  }

  addSibling(el: userStudData) {
    let data = {};
    let parents_id = [this.parentServ.father.id, this.parentServ.mother.id];

    data['parents_id'] = parents_id;
    data['student_id'] = el.student.id;

    this.parentServ.addSiblingRequest(data);
  }

  filterSiblings() {
    this.noParents = this.tableData.filter((userStd: userStudData)=>{
      return userStd.student.parents.length < 1;
    })
    console.log(this.tableData);
    // console.log(noParent);
  }

}
