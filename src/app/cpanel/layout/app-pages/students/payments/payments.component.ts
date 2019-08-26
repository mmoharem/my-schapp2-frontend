import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { select } from "@angular-redux/store";
import { paymentEl, userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';
import { Observable, Subscription, Unsubscribable } from 'rxjs';
import { IAppState } from 'src/app/cpanel/shared/store/store';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PaymentsService } from 'src/app/cpanel/shared/services/http/payments.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment/moment';
import { Route, Router } from '@angular/router';

export interface DialogData {
  bankDate: string;
  bankNo: string;
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit, OnDestroy {

  @select(store => store.users.user) userObs: Observable<userStudData>;
  @select((store: IAppState) => store.payments.transactions) transObs: Observable<IAppState>;

  bankDate: string;
  bankNo: string;

  showStudent: FormGroup; // using form to show data
  subscription: Subscription;
  // private unsubscribe : Function;
  // dataSource: paymentEl[];
  tableColumns: string[] = ['id', 'type', 'amount', 'date', 'hold', 'confirm', 'print', 'del'];


  student = null;

  constructor(private fB: FormBuilder,
              private payServ: PaymentsService,
              public dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {




    this.subscription = this.userObs.subscribe(user => {
      if(!user) { this.router.navigate(['/students/findstudent']); return; }

      this.showStudent = this.fB.group({});
      this.student = user;
      this.getPayments();
    });
  }



  private getPayments() {
    this.payServ.getPayments(null, this.student.student.id);
  }

  // Bottons --

  // Hold Payments
  holdPayment(el) {
    let data: object = el;
    data['type'] = 'hold';
    // data['trans_id'] = el.id;
    console.log(data);
    this.payServ.updatePayment('students/transactions/update', data);
    this.getPayments()
  }

  // Open Confirmation Dailog Box:
  confDialog(el) {
    const dialogRef = this.dialog.open(PayDialogComponent, {
      width: '350px',
      data: {name: this.bankDate, animal: this.bankNo}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.bankDate = result[0];
      this.bankNo = result[1];
      this.confirmPayment(el);
    });
  }

  // Confirm Payment:
  confirmPayment(el) {
    let data = el;
    const bankDate = moment(this.bankDate).format('YYYY-MM-DD');

    data.bank_date = bankDate;
    data.bank_no = this.bankNo;
    data.type = 'confirmed';

    this.payServ.updatePayment('students/transactions/update', data);
    this.getPayments();
  }

  // Delet Payment:
  delPayment(el) {
    this.payServ.delPayment(`students/transactions/${el.id}`);
    this.getPayments();
  }

  // Printing Bank Invoice:
  onPrint(el) {
    let data = el;
    data.name = this.student.firstName;
    data.grade = this.student.student.grade.name;

    this.payServ.printPayment(el, 'bankInv');
    // window.print();
    // window.open('http://localhost:4200/(print:print)');
    // this.router.navigate(['../', { outlets: { print: [ 'print' ] }}]);
    this.router.navigateByUrl('(print:print)');
  }

  // On Destroy:
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

// Dailog Box Component:
@Component({
  selector: 'payDialog',
  templateUrl: 'payDialog.html',
})
export class PayDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PayDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data) {}
    @Inject(MAT_DIALOG_DATA) public data: DialogData)
  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
