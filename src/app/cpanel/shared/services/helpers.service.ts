import { Injectable } from '@angular/core';
import * as moment from 'moment/moment';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  formateDate(date) {
    const dateFormat = moment(date).format('YYYY-MM-DD');
  }
}
