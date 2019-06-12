import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-pages',
  templateUrl: './app-pages.component.html',
  styleUrls: ['./app-pages.component.scss']
})
export class AppPagesComponent implements OnInit {

  constructor(private httpServ: HttpService) { }

  ngOnInit() {
  }

  getGrades() {
    this.httpServ.getRequest('grade')

    ;
  }

}
