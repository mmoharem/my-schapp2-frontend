import { Component, OnInit } from '@angular/core';
import { select } from "@angular-redux/store";
import { IAppState } from 'src/app/cpanel/shared/store/store';

@Component({
  selector: 'stud-pay-state',
  templateUrl: './pay-state.component.html',
  styleUrls: ['./pay-state.component.scss']
})
export class PayStateComponent implements OnInit {

  @select((store: IAppState) => store.payments.payment) paymentObs;

  constructor() { }

  ngOnInit() {
  }

}
