import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-update-parent',
  templateUrl: './show-update-parent.component.html',
  styleUrls: ['./show-update-parent.component.scss']
})
export class ShowUpdateParentComponent implements OnInit {

  dataObj = {
    dataType: 'parent',
    url: 'parents'
  }

  constructor() { }

  ngOnInit() {
  }

}
