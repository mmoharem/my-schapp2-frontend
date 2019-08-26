import { Component, OnInit, OnDestroy } from '@angular/core';
import { select } from "@angular-redux/store";
import { IAppState } from 'src/app/cpanel/shared/store/store';
import { Subscription } from 'rxjs';
import { ParentServService } from '../../parent-serv.service';

@Component({
  selector: 'app-add-parents',
  templateUrl: './add-parents.component.html',
  styleUrls: ['./add-parents.component.scss']
})
export class AddParentsComponent implements OnInit, OnDestroy {

  dataObj = {
    dataType: 'parent',
    url: 'parents'
  }

  @select((store: IAppState) => store.users.user) userStore;
  subscribe: Subscription;

  constructor(private parentServ: ParentServService) { }

  ngOnInit() {
    this.subscribe = this.userStore.subscribe(user => {
      console.log(user);
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
