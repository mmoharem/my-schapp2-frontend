import { Component, OnInit } from '@angular/core';
import { NgRedux } from "@angular-redux/store";
import { IAppState } from 'src/app/cpanel/shared/store/store';
import { GET_USERS_SUCCESS } from 'src/app/cpanel/shared/store/users.store';

@Component({
  selector: 'app-find-stud',
  templateUrl: './find-stud.component.html',
  styleUrls: ['./find-stud.component.scss']
})
export class FindStudComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) {}

  tableColumns: string[] = [
    'id', 'name', 'address', 'gender', 'birthDate', 'grade', 'fees', 'payment', 'image',
    'payments', 'edite', 'delete', 'parent',
    // 'attend'
  ];
  tableObj = {
    tableCol: this.tableColumns,
    type: 'student'
  };

  ngOnInit() {
    this.ngRedux.dispatch({type: GET_USERS_SUCCESS, users: []});
  }
}
