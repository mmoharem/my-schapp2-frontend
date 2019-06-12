import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';
import { userStudData, paymentEl } from 'src/app/cpanel/shared/interfaces/app-interface';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {

  // private dataSource: paymentEl[];
  // private tableColumns: string[] = ['id', 'type', 'amount', 'date'];
  // private showStudent: FormGroup;
  // private addPayment: FormGroup;
  // private student: userStudData;
  dataSource: paymentEl[];
  tableColumns: string[] = ['id', 'type', 'amount', 'date'];
  showStudent: FormGroup;
  addPayment: FormGroup;
  student: userStudData;

  constructor(private fB: FormBuilder,
              private httpServ: HttpService,
              private studServ: StudentsService) { }

  ngOnInit() {
    this.studServ.emitStudent.subscribe(this);
    // this.httpServ.getGrades();
    this.initForm();

  }

  next = (student: userStudData) => {
    this.student = student;
    this.getPayments(student.student.id);
    // console.log(this.student.id);
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
