import { Component, OnInit } from '@angular/core';
import { ParentServService } from '../../../parent-serv.service';
import { select } from "@angular-redux/store";
import { IAppState } from 'src/app/cpanel/shared/store/store';
import { IUserState } from 'src/app/cpanel/shared/store/users.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'siblings-table',
  templateUrl: './siblings-table.component.html',
  styleUrls: ['./siblings-table.component.scss']
})
export class SiblingsTableComponent implements OnInit {

  @select((store: IAppState) => store.users.siblings) siblingsStore: Observable<IUserState>;

  tableColumns: string[] = ['id', 'name', 'birthDate', 'phoneNumber', 'mobilePhone', 'address', 'image', 'parent'];

  tableObj = {
    tableCol: this.tableColumns,
    type: 'siblings'
  };

  constructor(private parentServ: ParentServService) { }

  ngOnInit() {
    this.parentServ.getSiblingsRequest(this.parentServ.father.id);

    // this.siblingsStore.subscribe((siblings => ))
  }

}
