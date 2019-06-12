import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.scss']
})
export class EmployeeMainComponent implements OnInit {

  navLinks = [];

  constructor() { }

  ngOnInit() {

    this.navLinks = [
      {
        label: 'All Employees',
        path: '/employee/showemployee',
        index: 0
      },
      {
        label: 'Add Emlpoyee',
        path: '/employee/addemployee',
        index: 1
      },
      {
        label: 'Find Employee',
        path: '/employee/findemployee',
        index: 3
      },
    ];
  }

}
