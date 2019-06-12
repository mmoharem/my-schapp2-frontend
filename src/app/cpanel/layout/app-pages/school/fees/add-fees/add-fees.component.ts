import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';

@Component({
  selector: 'sch-add-fees',
  templateUrl: './add-fees.component.html',
  styleUrls: ['./add-fees.component.scss']
})
export class AddFeesComponent implements OnInit {

  grades = [];
  // private form: FormGroup;
  form: FormGroup;

  constructor(private fB: FormBuilder,
              private httpServ: HttpService) { }

  ngOnInit() {
    this.httpServ.emitGrade.subscribe((grades: any) => this.grades = grades);
    this.initForm();
  }

  private initForm() {
    this.form = this.fB.group({
      grade: ['', Validators.required],
      old_schFees: ['', Validators.required],
      schFees: [''],
      old_booksFees: ['', Validators.required],
      booksFees: [''],
    })
  }

  // private submit() {
  submit() {
    const data = this.form.getRawValue();

    this.httpServ.postRequest('school/fees', data)
      .subscribe(
        results => console.log(results),
        error => console.log(error)
      )
    ;
  }

}
