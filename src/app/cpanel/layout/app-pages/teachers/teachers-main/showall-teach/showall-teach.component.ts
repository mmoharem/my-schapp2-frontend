import { Component, OnInit } from '@angular/core';
import { CompHttpService } from 'src/app/cpanel/shared/components/comp-http.service';

@Component({
  selector: 'app-showall-teach',
  templateUrl: './showall-teach.component.html',
  styleUrls: ['./showall-teach.component.scss']
})
export class ShowallTeachComponent implements OnInit {

  tableColumns: string[] = ['id', 'name', 'birthDate', 'phoneNumber', 'mobilePhone', 'address', 'image'];
  tableObj = {
    tableColumns: this.tableColumns,
    type: 'employee'
  };

  constructor(private compHttp: CompHttpService) { }

  ngOnInit() {
    this.compHttp.getRequest('http://127.0.0.1:8000/teachers');
  }

}
