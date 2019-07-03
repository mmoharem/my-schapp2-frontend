import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from '../../services/students.service';
import { ImgUploadService } from '../../services/img-upload.service';
import * as moment from 'moment/moment';
import { ToastrService } from "ngx-toastr";
import { CompHttpService } from '../comp-http.service';
import { select } from "@angular-redux/store";

@Component({
  selector: 'registerForm',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Input() dataObjInp = {
    dataType: '',
    url: ''
  }
  @select(t => t.grading.grades) grades;
  // grades = [];
  imgObj;
  form: FormGroup;

  constructor(private formBuild: FormBuilder,
              private studServ: StudentsService,
              private imgUpldServ: ImgUploadService,
              private toastr: ToastrService,
              private compHttp: CompHttpService) { }

  ngOnInit() {
    // this.grades = this.studServ.grades;
    this.imgUpldServ.emitImgObj.subscribe(imgObj => this.imgObj = imgObj);
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
      image: [''],
      address: ['', Validators.required],
      gender: ['', Validators.required],
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

    if(this.dataObjInp.dataType === 'student') {
      group['grade_id'] = ['', Validators.required];
      group['gardian'] = ['both', Validators.required];
    };

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

    if(this.dataObjInp.dataType === 'employee') {
      const RegDate = this.form.value['reg_date'];
      const RegDateFormat = moment(RegDate).format('YYYY-MM-DD');
      data.reg_date = RegDateFormat;
    }

    if(this.imgObj) {
      data.image_id = this.imgObj.id;
    } else {
      this.toastr.error('Error: User Image Require')
    }

    console.log(data);

    this.compHttp.postRequest(this.dataObjInp.url, data);

    // if(this.dataObjInp.dataType === 'student') {
    // }
  }


}
