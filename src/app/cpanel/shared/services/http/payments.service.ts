import { Injectable } from '@angular/core';
import { NgRedux } from "@angular-redux/store";
import { IAppState } from '../../store/store';
import { CompHttpService } from '../../components/comp-http.service';
import { GET_TRANSACTIONS_SUCCESS, GET_PAYMENT_SUCCESS } from '../../store/payment.store';
import { GET_PAGINAT_DATA } from '../../components/pagination/pagination.store';
import { GET_PRINT_OBJECT } from '../../store/print.store';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  bankAccNo = 8294551263693;

  constructor(private ngRedux: NgRedux<IAppState>,
              private compHttp: CompHttpService) { }

  getPayments(url, id?: number,) {
    let path = `http://127.0.0.1:8000/students/transactions/${id}`;

    if(url !== null) {
      path = url;
    }

    this.compHttp.getRequest(path).subscribe(
      (results: Request) => {
        this.ngRedux.dispatch({type: GET_TRANSACTIONS_SUCCESS, transactions: results['data']['data'][0]['transactions']});
        this.ngRedux.dispatch({type: GET_PAYMENT_SUCCESS, payment: results['data']['data'][0]['payment']});
        this.ngRedux.dispatch({type: GET_PAGINAT_DATA, pagData: results['data'], source: 'payment'})
      },
      (error: Response) => console.log(error)
    );
  }

  addPayments(url, data) {
    this.compHttp.postRequest(url, data).subscribe(
      (results: Request) => {
        // this.ngRedux.dispatch({type: GET_PAYMENTS_SUCCESS, payment: results['data']['data']});
        this.ngRedux.dispatch({type: GET_PAGINAT_DATA, pagData: results['data'], source: 'payment'})
      },
      (error: Response) => console.log(error)
    );
  }

  updatePayment(url, data) {
    this.compHttp.putRequest(url, data).subscribe(
      (results: Request) => {
        // this.ngRedux.dispatch({type: GET_PAYMENTS_SUCCESS, payment: results['data']['data']});
        this.ngRedux.dispatch({type: GET_PAGINAT_DATA, pagData: results['data'], source: 'payment'});
      },
      (error: Response) => console.log(error)
    );
  }

  delPayment(url) {
    this.compHttp.delRequest(url).subscribe(
      (results: Request) => {
        console.log(results);
      },
      (error: Response) => console.log(error)
    );
  }

  printPayment(obj, state) {
    let data = obj;
    data.accNo = this.bankAccNo;

    this.ngRedux.dispatch({type: GET_PRINT_OBJECT, dataObj: data, printState: state});
  }

}
