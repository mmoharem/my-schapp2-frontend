import { Component, OnInit } from '@angular/core';
import { select } from "@angular-redux/store";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';
import { paymentEl, userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/cpanel/shared/store/store';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  @select(t => t.userBtn.user) userObs: Observable<userStudData>;
  dataSource: paymentEl[];
  tableColumns: string[] = ['id', 'type', 'amount', 'date'];
  showStudent: FormGroup;
  addPayment: FormGroup;
  student: userStudData;

  constructor(private fB: FormBuilder,
              private httpServ: HttpService,
              private studServ: StudentsService) { }

  ngOnInit() {
    this.initForm()
    this.userObs.subscribe(user => {
      console.log(user)
      this.student = user;
      this.getPayments(user.student.id);
    });
  }

  private initForm() {
    this.showStudent = this.fB.group({
    })
    this.addPayment = this.fB.group({
      type: ['', Validators.required],
      amount: ['', Validators.required],
      student_id: ['']
    })
  }

  private getPayments(id) {
    this.httpServ.getRequest(`students/transactions/${id}`)
      .subscribe(
        (results: Response) => {
          this.dataSource = results['data']['data'];
          console.log(this.dataSource);
        },
        error => console.log(error)
      )
    ;
    console.log(id);
  }

  // private submit() {
  submit() {

    const data = this.addPayment.getRawValue();

    data.student_id = this.student.id;

    this.httpServ.postRequest('students/transactions', data)
      .subscribe(
        results => console.log(results),
        error => console.log(error)
      )
    ;

    this.getPayments(this.student.id);
  }

}
