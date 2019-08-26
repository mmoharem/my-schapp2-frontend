import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment/moment';
import { ImgUploadService } from '../../services/img-upload.service';
import { ToastrService } from "ngx-toastr";
import { select, NgRedux } from "@angular-redux/store";
import { Router } from '@angular/router';
import { UsersService } from '../../services/http/users.service';
import { profession } from '../../interfaces/profession';
import { ParentServService } from 'src/app/cpanel/layout/app-pages/parents/parent-serv.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'registerForm',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit, OnDestroy {

  @Input() dataObjInp = {
    dataType: '',
    url: ''
  }

  @select(store => store.grading.grades) grades;
  @select(store => store.request.error) errorStore;

  subscribe: Subscription;
  subscribeErr: Subscription;

  professions = profession;
  // parentRel = ifStmt;
  imgObj;
  form: FormGroup;

  constructor(private formBuild: FormBuilder,
              private router: Router,
              private imgUpldServ: ImgUploadService,
              private toastr: ToastrService,
              private userServ: UsersService,
              private parentServ: ParentServService,) { }

  ngOnInit() {
    this.subscribe =  this.imgUpldServ.emitImgObj.subscribe(imgObj => this.imgObj = imgObj);
    this.buildForm();
  }

  uploadImg(e) {
    const image = e.target.files[0];
    this.imgUpldServ.uploadImg(e.target.files[0]);
  }

  buildForm() {

    let group = {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      nationality: ['Egyption', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      medicalState: [''],
      notes: [''],
      password: ['pasword123'],
      password_confirmation: ['pasword123'],
    };

    if(this.dataObjInp.dataType !== 'parent') {
      group['gender'] = ['', Validators.required];
    }

    // Student
    if(this.dataObjInp.dataType === 'student') {
      group['grade_id'] = ['', Validators.required];
      group['gardian'] = ['both', Validators.required];
    };

    // Parents
    if(this.dataObjInp.dataType === 'parent') {
      group['gender'] = [this.parentServ.gender, Validators.required];
      group['relation'] = [this.parentServ.relation, Validators.required];
      group['edu_degree'] = ['', Validators.required];
      group['job'] = ['', Validators.required];
      group['company_name'] = ['', Validators.required];
      group['profession'] = ['', Validators.required];
      group['position'] = ['Not Required'];
      group['work_phone'] = ['', Validators.required];
      group['student_id'] = [this.parentServ.student_id, Validators.required];

    };

    // Employee
    if(this.dataObjInp.dataType === 'employee') {
      group['profession'] = ['', Validators.required];
      group['speciality'] = ['', Validators.required];
      group['insurance_state'] = ['', Validators.required];
      group['reg_date'] = ['', Validators.required];
      group['experience'] = ['', Validators.required];
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

      this.subscribeErr = this.errorStore.subscribe((error:{}) => {
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

  ngOnDestroy() {
    this.subscribe.unsubscribe();
    this.subscribeErr.unsubscribe();
  }

}
