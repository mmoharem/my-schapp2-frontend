import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {

  emitImgObj = new Subject;

  constructor(private httpServ: HttpService) { }

  uploadImg(imgData) {
    const frm = new FormData();
    frm.append('image', imgData, imgData.name);
    frm.append('type', 'user_img');

    this.httpServ.postRequest('upload/img', frm)
      .subscribe(
        results => this.handleResponse(results),
        error => this.handleError(error)
      )
    ;
  }

  handleResponse(response) {

    const imgObj = {
      id: response['id'],
      name: response['file.name'],
      url:  `http://127.0.0.1:8000/images/${response['filename']}`
    }

    this.emitImgObj.next(imgObj);
  }

  handleError(error) {
    console.log(error);
  }
}
