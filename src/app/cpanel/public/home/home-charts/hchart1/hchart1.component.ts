import { Component, OnInit } from '@angular/core';
import { single } from "./data";

@Component({
  selector: 'app-hchart1',
  templateUrl: './hchart1.component.html',
  styleUrls: ['./hchart1.component.scss']
})
export class Hchart1Component implements OnInit {

  single: any[];
  multi: any[];

  view: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#5AA454', '#A10A28']
  };
  cardColor = '#AAAAAA';
  bandColor = '';
  textColor = 'white';

  constructor() { }

  ngOnInit() {
    Object.assign(this, { single });
  }

}
