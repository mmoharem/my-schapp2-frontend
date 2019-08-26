import { Component, OnInit, AfterViewInit } from '@angular/core';
import { select } from "@angular-redux/store";
import { Location } from "@angular/common";

@Component({
  selector: 'print-bank-invoice',
  templateUrl: './bank-invoice.component.html',
  styleUrls: ['./bank-invoice.component.scss']
})
export class BankInvoiceComponent implements OnInit, AfterViewInit {
  @select(store => store.printing) printStore;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // window.print();
    // this.location.back();
  }
}
