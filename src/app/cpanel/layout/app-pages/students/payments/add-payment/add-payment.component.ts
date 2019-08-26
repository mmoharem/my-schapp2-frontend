import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompHttpService } from 'src/app/cpanel/shared/components/comp-http.service';
import { select } from "@angular-redux/store";
import { Subscription } from 'rxjs';
import { userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';
import { PaymentsService } from 'src/app/cpanel/shared/services/http/payments.service';

@Component({
  selector: 'student-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit, OnDestroy {

  @select(store => store.users.user) studentObs;

  student: userStudData;
  subscription: Subscription;
  addPayment: FormGroup;

  constructor(private fB: FormBuilder,
              private paymServ: PaymentsService) { }

  ngOnInit() {
    this.subscription = this.studentObs.subscribe(student => {
      this.student = student;
      console.log(this.student);
    })

    this.initForm();
  }

  private initForm() {

    this.addPayment = this.fB.group({
      type: ['', Validators.required],
      amount: ['', Validators.required],
      student_id: ['']
    })
  }

  submit() {

    const data = this.addPayment.getRawValue();

    data.student_id = this.student.student.id;
    // console.log(data);

    this.paymServ.addPayments('students/transactions', data);
    this.paymServ.getPayments(null, this.student.student.id);


    // this.getPayments(this.student.id);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
