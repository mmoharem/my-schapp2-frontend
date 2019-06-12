import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(private studServ: StudentsService) { }

  ngOnInit() {
    this.studServ.getGrades();
  }
}
