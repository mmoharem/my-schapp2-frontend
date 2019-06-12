import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-main',
  templateUrl: './teachers-main.component.html',
  styleUrls: ['./teachers-main.component.scss']
})
export class TeachersMainComponent implements OnInit {

  navLinks = [];

  constructor() { }

  ngOnInit() {

    this.navLinks = [
      {
        label: 'All Teachers',
        path: '/teachers/showteachers',
        index: 0
      },
      {
        label: 'Add Teacher',
        path: '/teachers/addteacher',
        index: 1
      },
      {
        label: 'Find Teacher',
        path: '/teachers/findteacher',
        index: 3
      },
    ];
  }

}
