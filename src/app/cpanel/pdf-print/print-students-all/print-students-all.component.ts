import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'print-students-all',
  templateUrl: './print-students-all.component.html',
  styleUrls: ['./print-students-all.component.scss']
})
export class PrintStudentsAllComponent implements OnInit {

  @ViewChild('studTableCont') studTableCont: ElementRef;
  @ViewChild('studTable') studTable: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.studTableCont.nativeElement.firstChild.firstChild.childNodes);
  }

}
