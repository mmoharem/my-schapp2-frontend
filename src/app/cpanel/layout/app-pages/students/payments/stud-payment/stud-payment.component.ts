import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import * as moment from 'moment/moment';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';
import { studentData, userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';

@Component({
  selector: 'students-stud-payment',
  templateUrl: './stud-payment.component.html',
  styleUrls: ['./stud-payment.component.scss']
})
export class StudPaymentComponent implements OnInit {

  // private form: FormGroup;
  form: FormGroup;
  // private grades;
  grades = [];
  // private tableColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'grade', 'image', 'btn'];
  tableColumns: string[] = ['id', 'firstName', 'lastName', 'birthDate', 'grade', 'image', 'btn'];
  // private dataS: userStudData[];
  dataS: userStudData[];

  constructor(private fB: FormBuilder,
              private httpServ: HttpService,
              private http: HttpClient,
              private studServ: StudentsService) { }

  ngOnInit() {
    // this.httpServ.getGrades();
    this.httpServ.emitGrade.subscribe((grades: any) => this.grades = grades)
    this.initForm();
  }

  private initForm() {
    this.form = this.fB.group({
      firstName: [''],
      lastName: '',
      grade_id: '',
      birthDate: ''
    });
  }

  // private submit() {
  submit() {
    const data = this.form.getRawValue();
    const date = this.form.value['birthDate'];
    let dateFormated;

    if(date) {
      dateFormated = moment(date).format('YYYY-MM-DD');
      data.birthDate = dateFormated;
    }

    // this.httpServ.postRequest('search', data)
    this.http.post('http://127.0.0.1:8000/students/search', data)
      .subscribe(
        (results: Response) => this.dataS = results['data']['data'],
        // results => {
        //   this.dataS = results['data']['data'];
        //   let data: any = results['data']['data'];
        //   data.forEach(dat => {
        //     console.log(dat.firstName);
        //   })
        //   console.log(data)
        // },
        (error: Response) => console.log(error)
      )
    ;
  }

  showStud(student: userStudData) {
    this.studServ.showStudent(student);
  }
}
