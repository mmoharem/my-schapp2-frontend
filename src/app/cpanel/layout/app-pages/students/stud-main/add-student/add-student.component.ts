import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import { TokenService } from 'src/app/cpanel/shared/services/token.service';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { CompHttpService, compResObj } from 'src/app/cpanel/shared/components/comp-http.service';

@Component({
  selector: 'students-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  dataObj = {
    dataType: 'student',
    url: 'students'
  }
  error = [];

  constructor(private httpServ: HttpService,
              private compHttp: CompHttpService,
              private tokenServ: TokenService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.compHttp.emittReq.subscribe(this.next);
  }

  next = (resObject: compResObj) => {
    if(resObject.postRes) {
      this.handleResponse(resObject.postRes);
    }
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  handleResponse(result) {
    // this.tokenServ.setTokrn(result.access_token);
    // this.router.navigate(['/secure']);
    // this.httpServ.isLoggedIn();
    // console.log(result)
  }

}
