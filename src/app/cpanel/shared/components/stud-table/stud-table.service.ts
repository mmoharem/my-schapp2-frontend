import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { userStudData } from '../../interfaces/app-interface';

@Injectable({
  providedIn: 'root'
})
export class StudTableService {

  constructor() { }

  user: userStudData;
  emittStud = new Subject;

  onUpdate(user: userStudData) {
    this.user = user;
    // this.emittStud.next(student);
  }

}
