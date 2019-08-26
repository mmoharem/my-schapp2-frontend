import { Component, OnInit, Input } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Subscription } from 'rxjs';
import { profession } from '../../interfaces/profession';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImgUploadService } from '../../services/img-upload.service';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/http/users.service';
import { IAppState } from '../../store/store';
import * as moment from 'moment/moment';

@Component({
  selector: 'show-updat-user',
  templateUrl: './show-updat-user.component.html',
  styleUrls: ['./show-updat-user.component.scss']
})
export class ShowUpdatUserComponent implements OnInit {

  @Input() dataObjInp = {
    dataType: '',
    url: ''
  }

  @select((store: IAppState)=> store.users) userStore;
  @select((store: IAppState)=> store.grading.grades) grades;
  @select(store => store.request.error) error;

  user = null;
  subscribe: Subscription;

  professions = profession;
  // parentRel = ifStmt;
  imgObj;
  form: FormGroup
  ;

  constructor(private formBuild: FormBuilder,
              private router: Router,
              private imgUpldServ: ImgUploadService,
              private toastr: ToastrService,
              private userServ: UsersService,) { }

  ngOnInit() {

    this.subscribe = this.userStore.subscribe(users => {
      if(this.dataObjInp.dataType !== 'parent' && users.user)
      {
        this.user = users.user;
        this.buildForm();
      }

      else if(this.dataObjInp.dataType === 'parent' && users.parent)
      {
        this.user = users.parent;
        this.buildForm();
      }
    });

    this.imgUpldServ.emitImgObj.subscribe(imgObj => this.imgObj = imgObj);
  }

  uploadImg(e) {
    const image = e.target.files[0];
    this.imgUpldServ.uploadImg(e.target.files[0]);
  }

  buildForm() {

    let group = {
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      fullName: [this.user.fullName, Validators.required],
      address: [this.user.address, Validators.required],
      nationality: [this.user.nationality, Validators.required],
      birthDate: [this.user.birthDate, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      phoneNumber: [this.user.phoneNumber, Validators.required],
      mobilePhone: [this.user.mobilePhone, Validators.required],
      medicalState: [this.user.medicalState],
      notes: [this.user.notes],
      // image: [this.user.images[0].id],
      password: ['pasword123'],
      password_confirmation: ['pasword123'],
    };

    if(this.dataObjInp.dataType !== 'parent') {
      group['gender'] = [this.user.gender, Validators.required];
    }

    // Student
    if(this.dataObjInp.dataType === 'student') {
      group['grade_id'] = [this.user.student.grade.id, Validators.required];
      group['gardian'] = [this.user.student.gardian, Validators.required];
    };

    // Parents
    if(this.dataObjInp.dataType === 'parent') {
      group['gender'] = [this.user.gender, Validators.required];
      // group['relation'] = [this.user.parent.relation, Validators.required];
      group['edu_degree'] = [this.user.parent.edu_degree, Validators.required];
      group['job'] = [this.user.parent.job, Validators.required];
      group['company_name'] = [this.user.parent.company_name, Validators.required];
      group['profession'] = [this.user.parent.profession, Validators.required];
      group['position'] = [this.user.parent.position];
      group['work_phone'] = [this.user.parent.work_phone, Validators.required];
      group['student_id'] = [this.user.parent.student_id, Validators.required];

    };

    // Employee
    if(this.dataObjInp.dataType === 'employee') {
      group['profession'] = [this.user, Validators.required];
      group['speciality'] = [this.user, Validators.required];
      group['insurance_state'] = [this.user, Validators.required];
      group['reg_date'] = [this.user, Validators.required];
      group['experience'] = [this.user, Validators.required];
    };

    this.form = this.formBuild.group(group);

  }


  submit() {
    const data = this.form.getRawValue();
    const Birthdate = this.form.value['birthDate'];

    const BirthdateFormat = moment(Birthdate).format('YYYY-MM-DD');
    data.birthDate = BirthdateFormat;

    // Employee
    if(this.dataObjInp.dataType === 'employee') {
      const RegDate = this.form.value['reg_date'];
      const RegDateFormat = moment(RegDate).format('YYYY-MM-DD');
      data.reg_date = RegDateFormat;
    }

    // Image
    if(this.imgObj) {
      data.image_id = this.imgObj.id;
    } else {
      this.toastr.error('Error: User Image Require')
    }

    // console.log(data);

    this.userServ.addUsers(this.dataObjInp.url, data);

    // Student
    if(this.dataObjInp.dataType === 'student') {
      this.error.subscribe((error:{}) => {
        if(Object.keys(error).length === 0)
        this.router.navigate(['/parents/addparents']);
      });
    }

    // Parent
    if(this.dataObjInp.dataType === 'parent') {
      // let url;
      // url = this.dataObjInp.url + '/' + this.parentServ.student_id;
      // this.userServ.findUser(url);
      this.router.navigate(['/parents']);
    }

    console.log(data);
  }

}

