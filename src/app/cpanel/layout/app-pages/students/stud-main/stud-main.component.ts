import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTabNav } from '@angular/material/tabs';

@Component({
  selector: 'students-stud-main',
  templateUrl: './stud-main.component.html',
  styleUrls: ['./stud-main.component.scss']
})
export class StudMainComponent implements OnInit, AfterViewInit {

  navLinks = [];

  // @ViewChild(MatTabNav) public matTabNav: MatTabNav;


  constructor() { }

  ngOnInit() {
    this.navLinks = [
      {
        label: 'All Students',
        path: '/students/showall',
        index: 0
      },
      {
        label: 'Add Student',
        path: '/students/addstudent',
        index: 1
      },
      {
        label: 'Find Student',
        path: '/students/findstudent',
        index: 3
      },
    ];
  }

  ngAfterViewInit() {

  }


  // public ngAfterViewChecked(): void {
  //   setTimeout(() => this.matTabNav._alignInkBar(), 0);
  // }

}
