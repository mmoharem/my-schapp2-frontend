import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import * as moment from 'moment';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';

// import FullCalendar from '@fullcalendar/core/Calendar';
// import Calendar from '@fullcalendar/core/Calendar';
// import { FullCalendar } from "@fullcalendar/core/Calendar";
// declare var Clendar: any;
import dayGridPlugin from '@fullcalendar/daygrid';
import dayGrid from '@fullcalendar/daygrid';
import timeGrid from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar1-test',
  templateUrl: './calendar1-test.component.html',
  styleUrls: ['./calendar1-test.component.scss']
})
export class Calendar1TestComponent implements OnInit {

  @ViewChild('calendar') calendEl: FullCalendarComponent;

  // calendarPlugins = [dayGridPlugin]; // important!

  calendarPlugins = [interaction ,dayGrid, timeGrid];
  events = [
    { title: 'event 1', date: '2019-04-01' },
    { title: 'event 2', date: '2019-04-02' }
  ];

  constructor(private fb: FormBuilder,
              private httpServ: HttpService) { }



  ngOnInit() {
    // var calendar = new FullCalendar.Calendar(this.calendEl, {

    // })

    let calendarApi = this.calendEl.getApi();
    // calendarApi.next();

    console.log(this.calendEl);
  }

}
