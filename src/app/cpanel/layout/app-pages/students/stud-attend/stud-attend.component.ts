import { Component, OnInit } from '@angular/core';
import { userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';
import { StudTableService } from 'src/app/cpanel/shared/components/stud-table/stud-table.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment/moment';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';

@Component({
  selector: 'app-stud-attend',
  templateUrl: './stud-attend.component.html',
  styleUrls: ['./stud-attend.component.scss']
})
export class StudAttendComponent implements OnInit {

  student: userStudData;
  form: FormGroup;
  attendData = [];

  constructor(private route: ActivatedRoute,
              private httpServ: HttpService,
              private stdTableSer: StudTableService,
              private FB: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(this.stdTableSer.user) {
        this.student = this.stdTableSer.user;
        this.getAttend();
        this.initForm();
      }
    });
  }

  initForm() {
    this.form = this.FB.group({
      id: [this.student.student.id],
      attend: ['', Validators.required],
      day: ['', Validators.required],
    });
  }

  submit() {
    const formData = this.form.getRawValue();
    const date = this.form.value['day'];
    let formatedDate = moment(date).format('YYYY-MM-DD');

    formData.day = formatedDate;

    this.httpServ.postRequest('students/attend', formData)
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
    this.getAttend();
  }

  getAttend() {
    console.log(this.student.student.id);
    this.httpServ.getRequest(`students/attend/${this.student.student.id}`)
    .subscribe(
      (results: Response) => this.handleResponse(results),
      error => console.log(error)
    );
  }

  handleResponse(results: any) {
    let data = results;

    data.forEach((item) => {
      let state;
      let color;
      if(item.attend === 1) {
        state = 'Present';
        color = '#3788d8';
      } else {
        state = 'Absent';
        color = 'red';
      }
      // console.log(item);
      this.attendData.push({title: state, date: item.day, color: color});
    });

    console.log(this.attendData);

    if(!this.attendData.length) {
      console.error('attendData returns empty array');
    }
  }

}
