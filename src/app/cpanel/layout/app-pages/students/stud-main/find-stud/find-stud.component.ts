import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-stud',
  templateUrl: './find-stud.component.html',
  styleUrls: ['./find-stud.component.scss']
})
export class FindStudComponent {

  tableColumns: string[] = [
    'id', 'name', 'address', 'gender', 'birthDate', 'grade', 'fees', 'payment', 'image', 'attend', 'show', 'edite', 'delete'
  ];
  tableObj = {
    tableColumns: this.tableColumns,
    type: 'student'
  };
}
