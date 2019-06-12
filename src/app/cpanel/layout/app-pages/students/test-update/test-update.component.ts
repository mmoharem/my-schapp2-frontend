import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudTableService } from 'src/app/cpanel/shared/components/stud-table/stud-table.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ImgUploadService } from 'src/app/cpanel/shared/services/img-upload.service';
import * as moment from 'moment/moment';
import { ToastrService } from 'ngx-toastr';
import { userStudData } from 'src/app/cpanel/shared/interfaces/app-interface';
import { StudentsService } from 'src/app/cpanel/shared/services/students.service';

@Component({
  selector: 'app-test-update',
  templateUrl: './test-update.component.html',
  styleUrls: ['./test-update.component.scss']
})
export class TestUpdateComponent implements OnInit {

  student: userStudData;
  grades = [];
  imgObj;
  form: FormGroup;

  constructor(private stdTableSer: StudTableService,
              private studServ: StudentsService,
              private fB: FormBuilder,
              private imgUpSer: ImgUploadService,
              private toastr: ToastrService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => console.log(params));
    // this.route.params.subscribe(params => console.log(params));
    this.imgUpSer.emitImgObj.subscribe(imgObj => this.imgObj = imgObj);

    this.route.paramMap.subscribe(params => {
      if(this.stdTableSer.user) {
        this.grades = this.studServ.grades;
        this.student = this.stdTableSer.user;
        this.initForm();
        // console.log(this.student.student.grade.id);
      }
    });

  }

  private initForm() {

    this.form = this.fB.group({
      firstName: ['', ],
      lastName: ['', ],
      image: [''],
      address: ['', ],
      gender: ['', ],
      birthDate: ['', ],
      email: ['', ],
      phoneNumber: ['', ],
      mobilePhone: ['', ],
      medicalState: [''],
      notes: [''],
      grade_id: [''],
      class: ['', ],
    });
  }

  uploadImg(e) {
    const image = e.target.files[0];
    this.imgUpSer.uploadImg(e.target.files[0]);
  }

  submit() {
    const data = this.form.getRawValue();
    const date = this.form.value['birthDate'];

    if(date) {
      const dateFormat = moment(date).format('YYYY-MM-DD');
      data.birthDate = dateFormat;
    }

    if(this.imgObj) {
      data.image_id = this.imgObj.id;

    } else {
      this.toastr.error('Error: User Image Require')
    }

    console.log(data);

    // this.studServ.createStudent(data)
    //   .subscribe(
    //     (results: Response) => console.log(results),
    //     (error: any) => {
    //       this.toastr.error(error.error.message)
    //       console.log(error);
    //     }
    //   )
    // ;
  }
}
