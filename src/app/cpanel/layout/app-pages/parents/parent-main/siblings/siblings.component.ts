import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentServService } from '../../parent-serv.service';

@Component({
  selector: 'app-siblings',
  templateUrl: './siblings.component.html',
  styleUrls: ['./siblings.component.scss']
})
export class SiblingsComponent implements OnInit {

  constructor(private router: Router,
              private parentsServ: ParentServService) { }

  ngOnInit() {
  }

  addSibling() {
    this.router.navigate(['/parents/siblings/addsibling']);
  }

}
