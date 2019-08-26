import { Component, OnInit } from '@angular/core';
import { NgRedux } from "@angular-redux/store";
import { IAppState } from 'src/app/cpanel/shared/store/store';
import { GET_USERS_SUCCESS } from 'src/app/cpanel/shared/store/users.store';

@Component({
  selector: 'app-add-sibling',
  templateUrl: './add-sibling.component.html',
  styleUrls: ['./add-sibling.component.scss']
})
export class AddSiblingComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  tableColumns: string[] = [
    'id', 'name', 'address', 'gender', 'birthDate', 'grade', 'fees', 'payment', 'image',
    'sibling',
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
