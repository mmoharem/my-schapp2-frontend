import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';

@Component({
  selector: 'sch-grade-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent implements OnInit {

  // private form: FormGroup;
  form: FormGroup;

  constructor(private fB: FormBuilder,
              private httpServ: HttpService) { }

  ngOnInit() {
    this.form = this.fB.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
    })
  }

  // private submit() {
  submit() {
    const data = this.form.getRawValue();

    this.httpServ.postRequest('school/grade', data)
      .subscribe(
        results => console.log(results),
        error => console.log(error)
      )
    ;
  }

}
