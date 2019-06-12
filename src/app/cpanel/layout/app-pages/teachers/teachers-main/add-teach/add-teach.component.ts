import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/cpanel/shared/services/http.service';
import { TokenService } from 'src/app/cpanel/shared/services/token.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompHttpService } from 'src/app/cpanel/shared/components/comp-http.service';

@Component({
  selector: 'app-add-teach',
  templateUrl: './add-teach.component.html',
  styleUrls: ['./add-teach.component.scss']
})
export class AddTeachComponent implements OnInit {
  dataObj = {
    dataType: 'teacher',
    url: 'teachers'
  }
  error = [];

  constructor(private httpServ: HttpService,
              private compHttp: CompHttpService,
              private tokenServ: TokenService,
              private router: Router,
              private toastr: ToastrService) { }


  ngOnInit() {
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  handleResponse(result) {
    console.log(result);
    this.tokenServ.setTokrn(result.access_token);
    this.router.navigate(['/secure']);
    this.httpServ.isLoggedIn();
  }
}
