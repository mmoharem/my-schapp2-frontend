import { Component, OnInit } from '@angular/core';
// import { NgRedux, select } from "@angular-redux/store";
// import { IAppState } from '../../shared/store/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @select() counter: number;
  // @select(['messaging', 'newMessages']) newMessages: number;
  // @select((state: IAppState) => state.messaging.newMessages) newMessages2: number;
  // @select(s => s.get('counter')) counter: number; //state.get('counter')

  // constructor(private ngRedux: NgRedux<IAppState>) {

  // }

  ngOnInit() {
    // this.subscription = this.ngRedux.subscribe(() => {
    //   var store = this.ngRedux.getState();
    //   this.counter = store.counter;
    // });
  }

  increment() {
    // this.ngRedux.dispatch({type: INCREMENT});
  }
}
