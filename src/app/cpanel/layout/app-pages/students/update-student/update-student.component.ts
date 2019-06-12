import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import { ImgUploadService } from 'src/app/cpanel/shared/services/img-upload.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

  // private imgObj;
  imgObj;
  // private form: FormGroup;
  form: FormGroup;

  constructor(private fB: FormBuilder,
              private httpServ: HttpService,
              private imgUpldServ: ImgUploadService) { }

  ngOnInit() {
    this.initForm();
    this.imgUpldServ.emitImgObj.subscribe(imgObj => this.imgObj = imgObj);
  }

  private initForm() {
    this.form = this.fB.group({
      firstName: ['', ],
      lastName: ['', ],
      image_id: [''],
      address: ['', ],
      gender: ['', ],
      // birthDate: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // phoneNumber: ['', Validators.required],
      // mobilePhone: ['', Validators.required],
      // medicalState: [''],
      // notes: [''],
      // grade: ['', Validators.required],
      // class: ['', Validators.required],
      // password: ['', Validators.required],
      // passwordConfirmation: ['', Validators.required]
    });
  }

  // private submit() {
  submit() {
    const data = this.form.getRawValue();

    if(this.imgObj) {
      data.image_id = this.imgObj.id;
    }

    console.log(data);

    this.httpServ.postRequest(`students/8`, data)
      .subscribe(
        results => console.log(results),
        error => console.log(error)
      )
    ;


  }

  // private uploadImg(e) {
  uploadImg(e) {
    const image = e.target.files[0];

    this.imgUpldServ.uploadImg(e.target.files[0]);
  }

}
