import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CompHttpService } from '../comp-http.service';
import { UsersService } from '../../services/http/users.service';
import { PaymentsService } from '../../services/http/payments.service';

@Injectable({
  providedIn: 'root'
})

export class PaginationService {

  // changeEmit = new Subject;
  // responseEmit = new Subject;
  // dataErrEmit = new Subject;
  emitUrl = new Subject;

  constructor(private usersServ: UsersService,
              private paymServ: PaymentsService) { }

  paginate(state: string, pagStore, perPage: number) {

    let url;
    // const cur = data.current_page;
    const data = pagStore.pagData;
    const source = pagStore.source;
    const path = data.path;

    if(state === 'perPage') {
      url = `${path}?page=1&per_page=${perPage}`;

    } else if(state === 'next') {
      url = `${data.next_page_url}&per_page=${perPage}`;

    } else if(state === 'back') {
      url = `${data.prev_page_url}&per_page=${perPage}`;
    }

    if(path.includes('search')) {
      this.usersServ.searchUser(url);
      return;
    }

    if(source === 'user') {
      this.usersServ.getUsers(url);
    } else

    if(source === 'payment') {
      this.paymServ.getPayments(url);
    }
    console.log(source)

    // switch(source) {
    //   case 'user':
    //     this.usersServ.getUsers(url)
    //   ;

    //   case 'payment':
    //     this.paymServ.getPayments(url)
    //   ;
    // }
  }
}
