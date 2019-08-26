import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import { select } from "@angular-redux/store";
import { IAppState } from 'src/app/cpanel/shared/store/store';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';

@Component({
  selector: 'sch-add-fees',
  templateUrl: './add-fees.component.html',
  styleUrls: ['./add-fees.component.scss']
})
export class AddFeesComponent implements OnInit {

  @select((store: IAppState) => store.grading.grades) gradesObs;

  feesGrade = null;
  allFees: [] = null;
  form: FormGroup;

  constructor(private fB: FormBuilder,
              private httpServ: HttpService,
              private studServ: StudentsService) { }

  ngOnInit() {
    this.getFees();
    this.studServ.getGrades();
    this.initForm();
  }

  private initForm() {
    this.form = this.fB.group({
      grade: ['', Validators.required],
      old_schFees: ['', Validators.required],
      schFees: [null],
      old_booksFees: ['', Validators.required],
      booksFees: [null],
    })
  }

  // private submit() {
  submit() {
    const data = this.form.getRawValue();

    this.httpServ.postRequest('school/fees', data)
      .subscribe(
        results => {
          this.getFees();
        },
        error => console.log(error)
      )
    ;
  }

  getFees() {
    this.httpServ.getRequest('school/fees').subscribe(
      (results: Response) => this.feesGradesFn(results),
      (error: Response) => console.log(error)
    );
  }

  feesGradesFn(feesRes) {
    this.allFees = feesRes['data']['data'];
    this.feesGrade = this.allFees.map((fees: any) => {return fees.grade_id});
  }

}
