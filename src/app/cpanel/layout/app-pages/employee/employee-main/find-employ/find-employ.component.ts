import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-employ',
  templateUrl: './find-employ.component.html',
  styleUrls: ['./find-employ.component.scss']
})
export class FindEmployComponent implements OnInit {

  tableColumns: string[] = [
    'id', 'name', 'address', 'gender', 'birthDate', 'image', 'show', 'edite', 'delete'
  ];
  tableObj = {
    tableColumns: this.tableColumns,
    type: 'employee'
  };

  constructor() { }

  ngOnInit() {
  }

}
