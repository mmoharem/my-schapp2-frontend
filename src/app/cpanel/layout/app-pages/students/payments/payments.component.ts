import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import * as moment from 'moment/moment';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';
import { studentData } from 'src/app/cpanel/shared/interfaces/app-interface';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  // private form: FormGroup;
  // private grades;
  // private tableColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'grade', 'image', 'btn'];
  // private dataS: studentData[];

  // constructor(private fB: FormBuilder,
  //             private httpServ: HttpService,
  //             private http: HttpClient,
  //             private studServ: StudentsService) { }

  ngOnInit() {
  //   this.initForm();
  }

  // private initForm() {
  //   this.form = this.fB.group({
  //     firstName: [''],
  //     lastName: '',
  //     grade: '',
  //     birthDate: ''
  //   });
  // }

  // private submit() {
  //   const data = this.form.getRawValue();
  //   const date = this.form.value['birthDate'];
  //   let dateFormated;

  //   if(date) {
  //     dateFormated = moment(date).format('YYYY-MM-DD');
  //     data.birthDate = dateFormated;
  //   }

  //   // this.httpServ.postRequest('search', data)
  //   this.http.post('http://127.0.0.1:8000/search', data)
  //     .subscribe(
  //       (results: studentData[]) => this.dataS = results['data'],
  //       // results => {
  //       //   let data: any = results['data'];
  //       //   data.forEach(dat => {
  //       //     console.log(dat.grade);
  //       //   })
  //         // console.log(data)
  //       // },
  //       error => console.log(error)
  //     )
  //   ;
  // }

  // showStud(student: studentData) {
  //   this.studServ.showStudent(student);
  // }

}
