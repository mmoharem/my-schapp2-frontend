import { Component, OnInit } from '@angular/core';
import { CompHttpService } from 'src/app/cpanel/shared/components/comp-http.service';

@Component({
  selector: 'app-show-employ',
  templateUrl: './show-employ.component.html',
  styleUrls: ['./show-employ.component.scss']
})
export class ShowEmployComponent implements OnInit {

  tableColumns: string[] = ['id', 'name', 'birthDate', 'phoneNumber', 'mobilePhone', 'address', 'image'];
  tableObj = {
    tableColumns: this.tableColumns,
    type: 'employee'
  };

  constructor(private compHttp: CompHttpService) { }

  ngOnInit() {
    this.compHttp.getRequest('http://127.0.0.1:8000/employee');
  }

}
