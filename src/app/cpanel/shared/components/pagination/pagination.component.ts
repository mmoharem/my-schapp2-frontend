import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from './pagination.service';
import { select } from "@angular-redux/store";
import { Observable } from 'rxjs';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @select(t => t.pagination) pagStoreObs:Observable<any>;
  @Input('perPage') perPage: number = 6;
  pagStore: object;

  perPageCheck: number;

  constructor(private paginServ: PaginationService) { }

  ngOnInit() {
    this.pagStoreObs.subscribe(paginate => {
      this.pagStore = paginate;
    });
    this.perPageCheck = this.perPage;
  }

  ngDoCheck() {
    if(this.perPage === this.perPageCheck) {
      return;
    }

    this.perPageCheck = this.perPage;
    this.paginate('perPage');
  }

  paginate(state) {
    this.paginServ.paginate(state, this.pagStore, this.perPage);
  }

}
