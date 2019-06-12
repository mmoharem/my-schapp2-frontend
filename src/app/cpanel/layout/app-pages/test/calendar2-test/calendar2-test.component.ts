import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import ListPlugin from "@fullcalendar/list";
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick

@Component({
  selector: 'app-calendar2-test',
  templateUrl: './calendar2-test.component.html',
  styleUrls: ['./calendar2-test.component.scss']
})
export class Calendar2TestComponent implements OnInit, AfterViewInit {

  @Input() dataInp: EventInput[];
  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin, ListPlugin];
  eventColor;
  calendarWeekends = true;
  // calendarEvents: EventInput[] = [
  //   { title: 'Event Now', start: new Date() }
  // ];
  // calendarEvents: EventInput[] = [
  //   {title: "Absent", date: "2019-05-08"},
  //   {title: "Present", date: "2019-05-09"},
  //   {title: "Present", date: "2019-05-10"},
  //   {title: "Present", date: "2019-05-14"},
  //   {title: "Absent", date: "2019-05-15"},
  // ];
  calendarEvents: EventInput[];

  constructor() { }

  ngOnInit() {
    this.calendarEvents = this.dataInp;
    this.calendarEvents.forEach(event => {
    });
  }

  ngAfterViewInit() {

  }

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }

}
