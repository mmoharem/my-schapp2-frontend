import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';

export interface feesElement {
  id: number,
  old_schoolFees: number,
  old_bookslFees: number,
  old_totFees: number,
  schoolFees: number,
  booksFees: number,
  totFees: number,

  grade: {
    name: string,
    level: string
  }
}

@Component({
  selector: 'school-fees-show-fees',
  templateUrl: './show-fees.component.html',
  styleUrls: ['./show-fees.component.scss']
})
export class ShowFeesComponent implements OnInit {

  // private dataSource: feesElement[];
  dataSource: feesElement[] = null;
  // private displayedColumns: string[] = ['id', 'grade', 'level', 'old_schoolFees', 'old_bookslFees', 'old_totFees', 'schoolFees', 'bookslFees', 'totFees'];
  displayedColumns: string[] = ['id', 'grade', 'level', 'old_schoolFees', 'old_bookslFees', 'old_totFees', 'schoolFees', 'bookslFees', 'totFees'];

  constructor(private httpServ: HttpService) { }

  ngOnInit() {
    this.initFees();
  }

  private initFees() {
    this.httpServ.getRequest('school/fees')
      .subscribe(
        results => {
          this.dataSource = results['data']['data'];
        },
        error => console.log(error)
      )
    ;
  }

}
