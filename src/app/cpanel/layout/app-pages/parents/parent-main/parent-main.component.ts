import { Component, OnInit, OnDestroy } from '@angular/core';
import { select } from "@angular-redux/store";
import { IAppState } from 'src/app/cpanel/shared/store/store';
import { Subscription } from 'rxjs';
import { userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';
import { Router } from '@angular/router';
import { ParentServService } from '../parent-serv.service';
import { UsersService } from 'src/app/cpanel/shared/services/http/users.service';

@Component({
  selector: 'app-parent-main',
  templateUrl: './parent-main.component.html',
  styleUrls: ['./parent-main.component.scss']
})
export class ParentMainComponent implements OnInit, OnDestroy {

  @select((store: IAppState) => store.users.user) userStore;
  subscribe: Subscription;
  student: userStudData = null;

  constructor(private router: Router,
              private userServ: UsersService,
              private parentServ: ParentServService) { }

  ngOnInit() {
    this.subscribe = this.userStore.subscribe((user: userStudData)=> {
      if(user) {
        this.student = user;
        this.parentServ.initParent(user);
      } else {
        this.router.navigate(['/students/findstudent']);
      }
    });
  }

  fatherFn() {
    // this.parentServ.initServ();
    this.parentServ.initParent(this.student);
    if(!this.parentServ.father) {
      this.parentServ.relation = 'father';
      this.parentServ.gender= 'male';
      this.parentServ.student_id = this.student.student.id;
      this.router.navigate(['/parents/addparents']);
    } else {
      let id = this.parentServ.father.id;
      this.userServ.findUser(`parents/${id}`);
      this.router.navigate(['/parents/show-update-parent']);
    }
  }

  motherFn() {
    // this.parentServ.initServ();

    if(!this.parentServ.mother) {
      this.parentServ.relation = 'mother';
      this.parentServ.gender= 'female';
      this.parentServ.student_id = this.student.student.id;
      this.router.navigate(['/parents/addparents']);
    } else {
      // console.log(this.parentServ.mother);
      let id = this.parentServ.mother.id;
      this.userServ.findUser(`parents/${id}`);
      this.router.navigate(['/parents/show-update-parent']);
    }
  }

  siblingsFn() {
    // console.log(this.parentServ.father);
    // console.log(this.parentServ.mother);
    // console.log(this.parentServ.relation);
    // console.log(this.parentServ.gender);
    this.router.navigate(['parents/siblings'])
  }

  addStudent() {
    console.log(this.parentServ.parents);
  }

  ngOnDestroy() {

    this.subscribe.unsubscribe();
    this.parentServ.initServ();
    console.log('paren Destroied');
  }

}
