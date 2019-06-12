import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import { CompHttpService } from 'src/app/cpanel/shared/components/comp-http.service';

@Component({
  selector: 'stud-tables',
  templateUrl: './stud-tables.component.html',
  styleUrls: ['./stud-tables.component.scss']
})
export class StudTablesComponent implements OnInit {

  // tableColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'phoneNumber', 'mobilePhone', 'class', 'address', 'image'];
  tableColumns: string[] = ['id', 'name', 'birthDate', 'phoneNumber', 'mobilePhone', 'address', 'image'];

  tableObj = {
    tableColumns: this.tableColumns,
    type: 'student'
  };

  constructor(private compHttp: CompHttpService) {

  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.compHttp.getRequest('http://127.0.0.1:8000/students');
  }

  handelResults(results: Response) {
  }

  handelError(error: Response) {
    console.log(error);
  }

}
